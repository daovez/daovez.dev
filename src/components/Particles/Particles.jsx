import {
  useEffect,
  useRef,
} from "react";

import p5 from "p5";

import "./Particles.css";


function Particles({
  panelOpen = false,
}) {
  const containerRef = useRef(null);

  const panelOpenRef = useRef(panelOpen);


  /* =========================================
     ACTUALIZAR PANEL
  ========================================= */

  useEffect(() => {
    panelOpenRef.current = panelOpen;
  }, [panelOpen]);


  /* =========================================
     P5
  ========================================= */

  useEffect(() => {
    const container =
      containerRef.current;


    if (!container) {
      return;
    }


    /* =========================================
       RATÓN
    ========================================= */

    const mouse = {
      x: -1000,
      y: -1000,
      inside: false,
    };


    let pushSquaresFromPoint = null;


    const sketch = (p) => {
      let shapes = [];

      let canvasWidth = 0;
      let canvasHeight = 0;

      let titleElement = null;
      let exclusionZone = null;


      /* =========================================
         CONFIGURACIÓN
      ========================================= */

      const TEXT_PADDING_X = 42;
      const TEXT_PADDING_Y = 32;

      const EDGE_DISTANCE = 42;

      const CLICK_RADIUS = 360;
      const CLICK_FORCE = 7.5;


      /* =========================================
         2 CUADRADOS NEGROS PEQUEÑOS
      ========================================= */

      const BLACK_SIZES = [
        14,
        22,
      ];


      /* =========================================
         ZONA DEL TÍTULO
      ========================================= */

      const updateExclusionZone = () => {
        if (
          !containerRef.current ||
          !titleElement
        ) {
          exclusionZone = null;

          return;
        }


        const containerRect =
          containerRef.current
            .getBoundingClientRect();


        const titleRect =
          titleElement
            .getBoundingClientRect();


        exclusionZone = {
          left:
            titleRect.left -
            containerRect.left -
            TEXT_PADDING_X,

          right:
            titleRect.right -
            containerRect.left +
            TEXT_PADDING_X,

          top:
            titleRect.top -
            containerRect.top -
            TEXT_PADDING_Y,

          bottom:
            titleRect.bottom -
            containerRect.top +
            TEXT_PADDING_Y,
        };
      };


      /* =========================================
         EVITAR TÍTULO
      ========================================= */

      const pushAwayFromText = (
        object,
        extraMargin = 0
      ) => {
        if (!exclusionZone) {
          return;
        }


        const half =
          object.size / 2 +
          extraMargin;


        const left =
          exclusionZone.left -
          half;


        const right =
          exclusionZone.right +
          half;


        const top =
          exclusionZone.top -
          half;


        const bottom =
          exclusionZone.bottom +
          half;


        const inside =
          object.x > left &&
          object.x < right &&
          object.y > top &&
          object.y < bottom;


        /* =====================================
           SI ENTRA EN EL TÍTULO
        ===================================== */

        if (inside) {
          const distanceLeft =
            object.x -
            left;


          const distanceRight =
            right -
            object.x;


          const distanceTop =
            object.y -
            top;


          const distanceBottom =
            bottom -
            object.y;


          const minimum =
            Math.min(
              distanceLeft,
              distanceRight,
              distanceTop,
              distanceBottom
            );


          if (
            minimum ===
            distanceLeft
          ) {
            object.vx -= 0.14;

            object.x -= 0.8;
          }


          else if (
            minimum ===
            distanceRight
          ) {
            object.vx += 0.14;

            object.x += 0.8;
          }


          else if (
            minimum ===
            distanceTop
          ) {
            object.vy -= 0.14;

            object.y -= 0.8;
          }


          else {
            object.vy += 0.14;

            object.y += 0.8;
          }


          return;
        }


        /* =====================================
           REPULSIÓN SUAVE DEL TÍTULO
        ===================================== */

        const closestX =
          Math.max(
            left,
            Math.min(
              object.x,
              right
            )
          );


        const closestY =
          Math.max(
            top,
            Math.min(
              object.y,
              bottom
            )
          );


        const dx =
          object.x -
          closestX;


        const dy =
          object.y -
          closestY;


        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );


        const influenceRadius = 55;


        if (
          distance > 0.001 &&
          distance < influenceRadius
        ) {
          const force =
            (
              influenceRadius -
              distance
            ) /
            influenceRadius;


          object.vx +=
            (
              dx /
              distance
            ) *
            force *
            force *
            0.055;


          object.vy +=
            (
              dy /
              distance
            ) *
            force *
            force *
            0.055;
        }
      };


      /* =========================================
         CUADRADO FLOTANTE
      ========================================= */

      class FloatingSquare {
        constructor({
          black = false,
          customSize = null,
        } = {}) {
          this.black = black;


          /* =====================================
             TAMAÑO
          ===================================== */

          this.size =
            customSize ??
            p.random(
              16,
              74
            );


          /* =====================================
             POSICIÓN
          ===================================== */

          this.x =
            p.random(
              this.size / 2,
              canvasWidth -
              this.size / 2
            );


          this.y =
            p.random(
              this.size / 2,
              canvasHeight -
              this.size / 2
            );


          /* =====================================
             PROFUNDIDAD
          ===================================== */

          this.depth =
            p.map(
              this.size,
              14,
              74,
              1.25,
              0.32
            );


          /* =====================================
             VELOCIDAD
          ===================================== */

          this.vx =
            p.random(
              -0.24,
              0.24
            ) *
            this.depth;


          this.vy =
            p.random(
              -0.24,
              0.24
            ) *
            this.depth;


          /* =====================================
             ROTACIÓN
          ===================================== */

          this.rotation =
            p.random(
              -0.25,
              0.25
            );


          this.rotationSpeed =
            p.random(
              -0.001,
              0.001
            ) *
            this.depth;


          /* =====================================
             ESQUINAS
          ===================================== */

          this.radius =
            p.random(
              5,
              16
            );


          /* =====================================
             COLOR
          ===================================== */

          if (this.black) {
            this.gray = 0;

            this.alpha =
              p.random(
                190,
                235
              );
          }

          else {
            const palette = [
              18,
              24,
              32,
              42,
              55,
              72,
              95,
              125,
              158,
              185,
              205,
              220,
              232,
            ];


            this.gray =
              p.random(
                palette
              );


            this.alpha =
              p.map(
                this.size,
                16,
                74,
                110,
                58
              );
          }


          this.edge = null;
        }


        /* =====================================
           RATÓN
        ===================================== */

        avoidMouse() {
          if (!mouse.inside) {
            return;
          }


          const dx =
            this.x -
            mouse.x;


          const dy =
            this.y -
            mouse.y;


          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );


          const radius =
            125 +
            this.size *
            0.65;


          if (
            distance <= 0.001 ||
            distance >= radius
          ) {
            return;
          }


          const force =
            (
              radius -
              distance
            ) /
            radius;


          const push =
            force *
            force;


          const directionX =
            dx /
            distance;


          const directionY =
            dy /
            distance;


          this.vx +=
            directionX *
            push *
            0.18;


          this.vy +=
            directionY *
            push *
            0.18;


          this.x +=
            directionX *
            push *
            1.7;


          this.y +=
            directionY *
            push *
            1.7;
        }


        /* =====================================
           EXPANSIÓN AL PULSAR
        ===================================== */

        clickPush(
          clickX,
          clickY
        ) {
          const dx =
            this.x -
            clickX;


          const dy =
            this.y -
            clickY;


          let distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );


          if (
            distance >
            CLICK_RADIUS
          ) {
            return;
          }


          if (
            distance <
            1
          ) {
            distance = 1;
          }


          const normalized =
            1 -
            distance /
            CLICK_RADIUS;


          const force =
            normalized *
            normalized *
            CLICK_FORCE;


          const directionX =
            dx /
            distance;


          const directionY =
            dy /
            distance;


          this.vx +=
            directionX *
            force;


          this.vy +=
            directionY *
            force;


          this.x +=
            directionX *
            force *
            2;


          this.y +=
            directionY *
            force *
            2;
        }


        /* =====================================
           BORDE MÁS CERCANO
        ===================================== */

        findClosestEdge() {
          const distances = [
            {
              edge: "left",
              value: this.x,
            },

            {
              edge: "right",
              value:
                canvasWidth -
                this.x,
            },

            {
              edge: "top",
              value: this.y,
            },

            {
              edge: "bottom",
              value:
                canvasHeight -
                this.y,
            },
          ];


          distances.sort(
            (a, b) =>
              a.value -
              b.value
          );


          return distances[0].edge;
        }


        /* =====================================
           RETIRARSE AL ABRIR PANEL
        ===================================== */

        retreatToEdge() {
          if (!this.edge) {
            this.edge =
              this.findClosestEdge();
          }


          const half =
            this.size /
            2;


          let targetX =
            this.x;


          let targetY =
            this.y;


          if (
            this.edge ===
            "left"
          ) {
            targetX =
              half +
              EDGE_DISTANCE;
          }


          if (
            this.edge ===
            "right"
          ) {
            targetX =
              canvasWidth -
              half -
              EDGE_DISTANCE;
          }


          if (
            this.edge ===
            "top"
          ) {
            targetY =
              half +
              EDGE_DISTANCE;
          }


          if (
            this.edge ===
            "bottom"
          ) {
            targetY =
              canvasHeight -
              half -
              EDGE_DISTANCE;
          }


          this.vx +=
            (
              targetX -
              this.x
            ) *
            0.004;


          this.vy +=
            (
              targetY -
              this.y
            ) *
            0.004;


          this.vx *=
            0.94;


          this.vy *=
            0.94;
        }


        /* =====================================
           MOVIMIENTO NORMAL
        ===================================== */

        normalMovement() {
          this.edge = null;


          pushAwayFromText(
            this
          );


          this.avoidMouse();


          this.vx *=
            0.97;


          this.vy *=
            0.97;


          const speed =
            Math.sqrt(
              this.vx *
              this.vx +
              this.vy *
              this.vy
            );


          const minSpeed =
            p.map(
              this.size,
              14,
              74,
              0.11,
              0.035
            );


          const maxSpeed =
            p.map(
              this.size,
              14,
              74,
              1.3,
              0.45
            );


          /* =====================================
             VELOCIDAD MÍNIMA
          ===================================== */

          if (
            speed <
            minSpeed
          ) {
            this.vx +=
              p.random(
                -0.012,
                0.012
              );


            this.vy +=
              p.random(
                -0.012,
                0.012
              );
          }


          /* =====================================
             EVITAR VELOCIDAD EXCESIVA
          ===================================== */

          const emergencyMax =
            maxSpeed *
            7;


          if (
            speed >
            emergencyMax
          ) {
            this.vx =
              (
                this.vx /
                speed
              ) *
              emergencyMax;


            this.vy =
              (
                this.vy /
                speed
              ) *
              emergencyMax;
          }
        }


        /* =====================================
           LÍMITES
        ===================================== */

        checkBounds() {
          const half =
            this.size /
            2;


          /* IZQUIERDA */

          if (
            this.x <
            half
          ) {
            this.x =
              half;


            this.vx =
              Math.abs(
                this.vx
              ) *
              0.65;
          }


          /* DERECHA */

          if (
            this.x >
            canvasWidth -
            half
          ) {
            this.x =
              canvasWidth -
              half;


            this.vx =
              -Math.abs(
                this.vx
              ) *
              0.65;
          }


          /* ARRIBA */

          if (
            this.y <
            half
          ) {
            this.y =
              half;


            this.vy =
              Math.abs(
                this.vy
              ) *
              0.65;
          }


          /* ABAJO */

          if (
            this.y >
            canvasHeight -
            half
          ) {
            this.y =
              canvasHeight -
              half;


            this.vy =
              -Math.abs(
                this.vy
              ) *
              0.65;
          }
        }


        /* =====================================
           UPDATE
        ===================================== */

        update() {
          if (
            panelOpenRef.current
          ) {
            this.retreatToEdge();
          }

          else {
            this.normalMovement();
          }


          this.x +=
            this.vx;


          this.y +=
            this.vy;


          this.rotation +=
            this.rotationSpeed;


          this.checkBounds();
        }


        /* =====================================
           DIBUJAR
        ===================================== */

        draw() {
          p.push();


          p.translate(
            this.x,
            this.y
          );


          p.rotate(
            this.rotation
          );


          p.rectMode(
            p.CENTER
          );


          p.noStroke();


          p.fill(
            this.black ? 2 : this.gray * 0.32,
            this.black ? 10 : this.gray * 0.68,
            this.black ? 22 : Math.min(255, this.gray * 1.15),
            this.alpha
          );


          p.rect(
            0,
            0,
            this.size,
            this.size,
            this.radius
          );


          p.pop();
        }
      }


      /* =========================================
         EXPANSIÓN
      ========================================= */

      const expandSquares = (
        x,
        y
      ) => {
        for (
          const shape
          of shapes
        ) {
          shape.clickPush(
            x,
            y
          );
        }
      };


      pushSquaresFromPoint =
        expandSquares;


      /* =========================================
         CREAR CUADRADOS
      ========================================= */

      const createShapes = () => {
        shapes = [];


        let amount =
          Math.floor(
            canvasWidth /
            70
          );


        amount =
          p.constrain(
            amount,
            10,
            18
          );


        /* =====================================
           CUADRADOS GRISES
        ===================================== */

        for (
          let i = 0;
          i < amount;
          i++
        ) {
          shapes.push(
            new FloatingSquare()
          );
        }


        /* =====================================
           SOLO 2 CUADRADOS NEGROS
        ===================================== */

        for (
          const size
          of BLACK_SIZES
        ) {
          shapes.push(
            new FloatingSquare({
              black: true,
              customSize: size,
            })
          );
        }


        /* =====================================
           MEZCLAR ORDEN
        ===================================== */

        shapes =
          p.shuffle(
            shapes,
            true
          );
      };


      /* =========================================
         SETUP
      ========================================= */

      p.setup = () => {
        canvasWidth =
          container.clientWidth;


        canvasHeight =
          container.clientHeight;


        titleElement =
          document.querySelector(
            ".hero-left h1"
          );


        const canvas =
          p.createCanvas(
            canvasWidth,
            canvasHeight
          );


        canvas.parent(
          container
        );


        p.pixelDensity(
          Math.min(
            window.devicePixelRatio ||
            1,
            2
          )
        );


        p.frameRate(
          60
        );


        updateExclusionZone();


        createShapes();
      };


      /* =========================================
         DRAW
      ========================================= */

      p.draw = () => {
        p.clear();


        updateExclusionZone();


        for (
          const shape
          of shapes
        ) {
          shape.update();

          shape.draw();
        }
      };


      /* =========================================
         RESPONSIVE
      ========================================= */

      p.windowResized = () => {
        canvasWidth =
          container.clientWidth;


        canvasHeight =
          container.clientHeight;


        p.resizeCanvas(
          canvasWidth,
          canvasHeight
        );


        updateExclusionZone();


        createShapes();
      };
    };


    /* =========================================
       CREAR P5
    ========================================= */

    const instance =
      new p5(
        sketch,
        container
      );


    /* =========================================
       TARJETA
    ========================================= */

    const card =
      container.closest(
        ".portfolio-card"
      );


    /* =========================================
       MOVIMIENTO RATÓN
    ========================================= */

    const handlePointerMove = (
      event
    ) => {
      const rect =
        container
          .getBoundingClientRect();


      mouse.x =
        event.clientX -
        rect.left;


      mouse.y =
        event.clientY -
        rect.top;


      mouse.inside =
        mouse.x >= 0 &&
        mouse.x <= rect.width &&
        mouse.y >= 0 &&
        mouse.y <= rect.height;
    };


    /* =========================================
       SALIR
    ========================================= */

    const handlePointerLeave = () => {
      mouse.x =
        -1000;


      mouse.y =
        -1000;


      mouse.inside =
        false;
    };


    /* =========================================
       PULSAR
    ========================================= */

    const handlePointerDown = (
      event
    ) => {
      if (
        panelOpenRef.current
      ) {
        return;
      }


      /* =====================================
         NO ACTIVAR SOBRE ELEMENTOS CLICABLES
      ===================================== */

      if (
        event.target.closest(
          "button, a, input, textarea, select, .panel-card"
        )
      ) {
        return;
      }


      const rect =
        container
          .getBoundingClientRect();


      const x =
        event.clientX -
        rect.left;


      const y =
        event.clientY -
        rect.top;


      pushSquaresFromPoint?.(
        x,
        y
      );
    };


    /* =========================================
       EVENTOS
    ========================================= */

    card?.addEventListener(
      "pointermove",
      handlePointerMove
    );


    card?.addEventListener(
      "pointerleave",
      handlePointerLeave
    );


    card?.addEventListener(
      "pointerdown",
      handlePointerDown
    );


    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      card?.removeEventListener(
        "pointermove",
        handlePointerMove
      );


      card?.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );


      card?.removeEventListener(
        "pointerdown",
        handlePointerDown
      );


      instance.remove();
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className="particles-background"
      aria-hidden="true"
    />
  );
}


export default Particles;
