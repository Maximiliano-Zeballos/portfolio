const THREE_MODULE = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';

customElements.define('crystal-scene', class extends HTMLElement {
  static get observedAttributes() {
    return ['accent', 'speed', 'particles'];
  }

  attributeChangedCallback() {
    if (this._ready) this._applyAttrs();
  }

  async connectedCallback() {
    this.style.display = 'block';
    this._THREE = await import(THREE_MODULE);
    if (!this.isConnected) return;
    this._depth = 46;
    this._initRenderer();
    this._buildScene();
    this._bindEvents();
    this._resize();
    this._ready = true;
    this._applyAttrs();
    this._startLoop();
  }

  disconnectedCallback() {
    cancelAnimationFrame(this._raf);
    removeEventListener('mousemove', this._onMouse);
    this._resizeObserver && this._resizeObserver.disconnect();
    this._renderer && this._renderer.dispose();
  }

  _initRenderer() {
    const THREE = this._THREE;
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'width:100%;height:100%;display:block';
    this.appendChild(canvas);
    this._renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this._renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this._camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    this._camera.position.set(0, 0, 9);
  }

  _buildScene() {
    const THREE = this._THREE;
    this._scene = new THREE.Scene();
    const background = new THREE.Color('#0a0714');
    this._scene.background = background;
    this._scene.fog = new THREE.Fog(background, 7, 30);
    this._addLights();
    this._addCrystals();
    this._addRings();
    this._makeParticles(900);
  }

  _addLights() {
    const THREE = this._THREE;
    this._scene.add(new THREE.AmbientLight(0x1e1838, 2.2));
    this._key = new THREE.PointLight(0xd4a94e, 260, 60, 1.8);
    this._key.position.set(4, 2, 6);
    this._scene.add(this._key);
    const rim = new THREE.DirectionalLight(0xdcd4ff, 1.4);
    rim.position.set(-6, 8, -4);
    this._scene.add(rim);
    const cool = new THREE.PointLight(0x5a4a9a, 90, 40, 2);
    cool.position.set(-5, -20, 2);
    this._scene.add(cool);
  }

  _addCrystals() {
    const THREE = this._THREE;
    this._crystals = [];
    this._materials = [];
    const geometries = [
      new THREE.OctahedronGeometry(1, 0),
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 1),
    ];

    const heroGeometry = new THREE.IcosahedronGeometry(1.7, 0);
    const hero = new THREE.Mesh(heroGeometry, this._makeMaterial('#a78bfa'));
    hero.position.set(3.1, -0.4, 2.5);
    hero.scale.set(1, 1.45, 1);
    hero.userData = { rs: 0.28, bob: 0.35, ph: 0 };
    hero.add(this._makeWireframe(heroGeometry, '#d4c4ff', 0.5));
    this._scene.add(hero);
    this._crystals.push(hero);

    for (let i = 0; i < 34; i++) {
      const geometry = geometries[i % geometries.length];
      const mesh = new THREE.Mesh(geometry, this._makeMaterial(i % 3 === 0 ? '#b79cff' : '#8b7dd8'));
      const t = i / 33;
      const side = i % 2 === 0 ? 1 : -1;
      mesh.position.set(side * this._rand(2.6, 8.5), -t * this._depth + this._rand(-3, 3), this._rand(-10, 3));
      const scale = this._rand(0.35, 1.5);
      mesh.scale.set(scale, scale * this._rand(1.2, 2.1), scale);
      mesh.rotation.set(this._rand(0, 6), this._rand(0, 6), this._rand(0, 6));
      mesh.userData = {
        rs: this._rand(0.1, 0.5) * (Math.random() > 0.5 ? 1 : -1),
        bob: this._rand(0.2, 0.7),
        ph: this._rand(0, 6),
      };
      if (i % 3 === 0) mesh.add(this._makeWireframe(geometry, '#c8b8f0', 0.35));
      this._scene.add(mesh);
      this._crystals.push(mesh);
    }
  }

  _addRings() {
    const THREE = this._THREE;
    this._rings = [];
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(this._rand(2.4, 4), 0.015, 8, 120),
        new THREE.MeshBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.28 })
      );
      ring.position.set(this._rand(-3, 3), -(i + 1) * (this._depth / 4) + this._rand(-2, 2), this._rand(-6, -2));
      ring.rotation.x = this._rand(0.8, 1.6);
      ring.userData = { rs: this._rand(0.05, 0.15) };
      this._scene.add(ring);
      this._rings.push(ring);
    }
  }

  _makeParticles(count) {
    const THREE = this._THREE;
    if (this._points) {
      this._scene.remove(this._points);
      this._points.geometry.dispose();
      this._points.material.dispose();
    }
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = 6 - Math.random() * (this._depth + 32);
      positions[i * 3 + 2] = 4 - Math.random() * 22;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this._points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: '#c8b8f0',
        size: 0.055,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this._scene.add(this._points);
  }

  _makeMaterial(color) {
    const THREE = this._THREE;
    const material = new THREE.MeshStandardMaterial({
      color,
      metalness: 0.9,
      roughness: 0.22,
      flatShading: true,
      emissive: color,
      emissiveIntensity: 0.08,
    });
    this._materials.push(material);
    return material;
  }

  _makeWireframe(geometry, color, opacity) {
    const THREE = this._THREE;
    return new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity })
    );
  }

  _bindEvents() {
    this._mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    this._scroll = 0;
    this._onMouse = (e) => {
      this._mouse.tx = (e.clientX / innerWidth) * 2 - 1;
      this._mouse.ty = (e.clientY / innerHeight) * 2 - 1;
    };
    addEventListener('mousemove', this._onMouse, { passive: true });
    this._resizeObserver = new ResizeObserver(() => this._resize());
    this._resizeObserver.observe(this);
  }

  _startLoop() {
    const THREE = this._THREE;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this._updateCamera(0);
      this._updateObjects(0, 0);
      this._renderer.render(this._scene, this._camera);
      return;
    }
    const clock = new THREE.Clock();
    const tick = () => {
      this._raf = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05);
      this._updateCamera(dt);
      this._updateObjects(dt, clock.elapsedTime);
      this._renderer.render(this._scene, this._camera);
    };
    tick();
  }

  _updateCamera(dt) {
    const scroller = document.scrollingElement || document.documentElement;
    const max = Math.max(1, scroller.scrollHeight - scroller.clientHeight);
    this._scroll += (scroller.scrollTop / max - this._scroll) * Math.min(1, dt * 4);
    this._mouse.x += (this._mouse.tx - this._mouse.x) * dt * 3;
    this._mouse.y += (this._mouse.ty - this._mouse.y) * dt * 3;

    const p = this._scroll;
    const camera = this._camera;
    camera.position.y = -p * this._depth + this._mouse.y * -0.3;
    camera.position.x = Math.sin(p * Math.PI * 2) * 1.4 + this._mouse.x * 0.6;
    camera.position.z = 9 + Math.sin(p * Math.PI * 3) * 0.8;
    camera.rotation.z = Math.sin(p * Math.PI * 2) * 0.05;
    camera.rotation.y = -this._mouse.x * 0.04;
    camera.rotation.x = -this._mouse.y * 0.03;
    this._key.position.set(camera.position.x + 4, camera.position.y + 2, 7);
  }

  _updateObjects(dt, elapsed) {
    const speed = this._speed || 1;
    for (const crystal of this._crystals) {
      crystal.rotation.y += crystal.userData.rs * dt * speed;
      crystal.rotation.x += crystal.userData.rs * 0.6 * dt * speed;
      crystal.position.y += Math.sin(elapsed * 0.8 * speed + crystal.userData.ph) * 0.0016 * crystal.userData.bob;
    }
    for (const ring of this._rings) {
      ring.rotation.z += ring.userData.rs * dt * speed;
    }
    if (this._points) this._points.rotation.y = elapsed * 0.015 * speed;
  }

  _applyAttrs() {
    const accent = this.getAttribute('accent') || '#a78bfa';
    this._speed = parseFloat(this.getAttribute('speed')) || 1;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) this._speed = 0;
    let count = parseInt(this.getAttribute('particles')) || 900;
    if (innerWidth < 640) count = Math.min(count, 900);
    if (this._key) this._key.color.set(accent);
    if (this._points && Math.abs(this._points.geometry.attributes.position.count - count) > 20) {
      this._makeParticles(count);
    }
  }

  _rand(min, max) {
    return min + Math.random() * (max - min);
  }

  _resize() {
    const width = this.clientWidth || innerWidth;
    const height = this.clientHeight || innerHeight;
    this._renderer.setSize(width, height, false);
    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();
  }
});
