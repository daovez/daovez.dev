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
     ESTADO PANEL
  ========================================= */

  useEffect(() => {
    panelOpenRef.current = panelOpen;
  }, [panelOpen]);


  /* =========================================
     P5
  ========================================= */

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }


    let triggerBurst = null;


    const sketch = (p) => {
      let shapes = [];
      let burstShapes = [];

      let canvasWidth = 0;
      let canvasHeight = 0;

      let titleElement = null;
      let exclusionZone = null;


      /* =========================================
         CONFIGURACIÓN
      ========================================= */

      const TEXT_PADDING_X = 38;
      const TEXT_PADDING_Y = 28;

      const TEXT_PUSH_STRENGTH = 0.22;


      const EDGE_DISTANCE = 52;
      const EDGE_FORCE = 0.07;
      const EDGE_MAX_SPEED = 2.2;


      /* =========================================
         EXPLOSIÓN
      ========================================= */

      const BURST_MIN = 10;
      const BURST_MAX = 14;

      const BURST_MIN_SPEED = 1.3;
      const BURST_MAX_SPEED = 3.5;


      /* =========================================
         ZONA DE EXCLUSIÓN DEL TÍTULO
      ========================================= */

      const updateExclusionZone = () => {
        const container =
          containerRef.current;


        if (
          !container ||
          !titleElement
        ) {
          exclusionZone = null;

          return;
        }


        const containerRect =
          container.getBoundingClientRect();


        const titleRect =
          titleElement.getBoundingClientRect();


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
         CUADRADO PRINCIPAL
      ========================================= */

      class FloatingSquare {
        constructor() {
          this.create();
        }


        create() {
          /* =====================================
             TAMAÑO
          ===================================== */

          this.size =
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
             PEQUEÑOS MÁS RÁPIDOS
             GRANDES MÁS LENTOS
          ===================================== */

          this.depthSpeed =
            p.map(
              this.size,
              16,
              74,
              1.15,
              0.28
            );


          this.vx =
            p.random(
              -0.28,
              0.28
            ) *
            this.depthSpeed;


          this.vy =
            p.random(
              -0.28,
              0.28
            ) *
            this.depthSpeed;


          if (
            Math.abs(this.vx) <
            0.045
          ) {
            this.vx =
              this.vx < 0
                ? -0.045
                : 0.045;
          }


          if (
            Math.abs(this.vy) <
            0.045
          ) {
            this.vy =
              this.vy < 0
                ? -0.045
                : 0.045;
          }


          /* =====================================
             ROTACIÓN
          ===================================== */

          this.rotation =
            p.random(
              -0.18,
              0.18
            );


          this.rotationSpeed =
            p.random(
              -0.0012,
              0.0012
            ) *
            p.map(
              this.size,
              16,
              74,
              1,
              0.45
            );


          /* =====================================
             ESQUINAS
          ===================================== */

          this.radius =
            p.random(
              5,
              16
            );


          /* =====================================
             GRISES
          ===================================== */

          const grayPalette = [
            18,
            26,
            36,
            48,
            62,
            82,
            108,
            138,
            168,
            192,
            214,
            230,
          ];


          this.gray =
            p.random(
              grayPalette
            );


          /* =====================================
             OPACIDAD
          ===================================== */

          this.alpha =
            p.map(
              this.size,
              16,
              74,
              95,
              52
            );


          this.edge = null;
        }


        /* =========================================
           BORDE MÁS CERCANO
        ========================================= */

        findClosestEdge() {
          const left =
            this.x;


          const right =
            canvasWidth -
            this.x;


          const top =
            this.y;


          const bottom =
            canvasHeight -
            this.y;


          const minimum =
            Math.min(
              left,
              right,
              top,
              bottom
            );


          if (minimum === left) {
            return "left";
          }


          if (minimum === right) {
            return "right";
          }


          if (minimum === top) {
            return "top";
          }


          return "bottom";
        }


        /* =========================================
           RETIRARSE AL BORDE
        ========================================= */

        retreatToEdge() {
          if (!this.edge) {
            this.edge =
              this.findClosestEdge();
          }


          const half =
            this.size / 2;


          if (
            this.edge === "left"
          ) {
            const targetX =
              half +
              EDGE_DISTANCE;


            const distance =
              this.x -
              targetX;


            if (distance > 0) {
              this.vx -=
                EDGE_FORCE *
                Math.min(
                  distance / 80,
                  1.8
                );
            }


            this.vy +=
              p.sin(
                p.frameCount *
                0.01 +
                this.size
              ) *
              0.002;
          }


          if (
            this.edge === "right"
          ) {
            const targetX =
              canvasWidth -
              half -
              EDGE_DISTANCE;


            const distance =
              targetX -
              this.x;


            if (distance > 0) {
              this.vx +=
                EDGE_FORCE *
                Math.min(
                  distance / 80,
                  1.8
                );
            }


            this.vy +=
              p.sin(
                p.frameCount *
                0.01 +
                this.size
              ) *
              0.002;
          }


          if (
            this.edge === "top"
          ) {
            const targetY =
              half +
              EDGE_DISTANCE;


            const distance =
              this.y -
              targetY;


            if (distance > 0) {
              this.vy -=
                EDGE_FORCE *
                Math.min(
                  distance / 80,
                  1.8
                );
            }


            this.vx +=
              p.cos(
                p.frameCount *
                0.01 +
                this.size
              ) *
              0.002;
          }


          if (
            this.edge === "bottom"
          ) {
            const targetY =
              canvasHeight -
              half -
              EDGE_DISTANCE;


            const distance =
              targetY -
              this.y;


            if (distance > 0) {
              this.vy +=
                EDGE_FORCE *
                Math.min(
                  distance / 80,
                  1.8
                );
            }


            this.vx +=
              p.cos(
                p.frameCount *
                0.01 +
                this.size
              ) *
              0.002;
          }


          const speed =
            Math.sqrt(
              this.vx * this.vx +
              this.vy * this.vy
            );


          if (
            speed >
            EDGE_MAX_SPEED
          ) {
            this.vx =
              (
                this.vx /
                speed
              ) *
              EDGE_MAX_SPEED;


            this.vy =
              (
                this.vy /
                speed
              ) *
              EDGE_MAX_SPEED;
          }
        }


        /* =========================================
           EVITAR TEXTO
        ========================================= */

        avoidText() {
          if (!exclusionZone) {
            return;
          }


          const margin =
            this.size / 2;


          const left =
            exclusionZone.left -
            margin;


          const right =
            exclusionZone.right +
            margin;


          const top =
            exclusionZone.top -
            margin;


          const bottom =
            exclusionZone.bottom +
            margin;


          if (
            this.x > left &&
            this.x < right &&
            this.y > top &&
            this.y < bottom
          ) {
            const distanceLeft =
              this.x -
              left;


            const distanceRight =
              right -
              this.x;


            const distanceTop =
              this.y -
              top;


            const distanceBottom =
              bottom -
              this.y;


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
              this.x -= 2.5;

              this.vx -=
                TEXT_PUSH_STRENGTH;
            }


            else if (
              minimum ===
              distanceRight
            ) {
              this.x += 2.5;

              this.vx +=
                TEXT_PUSH_STRENGTH;
            }


            else if (
              minimum ===
              distanceTop
            ) {
              this.y -= 2.5;

              this.vy -=
                TEXT_PUSH_STRENGTH;
            }


            else {
              this.y += 2.5;

              this.vy +=
                TEXT_PUSH_STRENGTH;
            }


            return;
          }


          const closestX =
            Math.max(
              left,
              Math.min(
                this.x,
                right
              )
            );


          const closestY =
            Math.max(
              top,
              Math.min(
                this.y,
                bottom
              )
            );


          const dx =
            this.x -
            closestX;


          const dy =
            this.y -
            closestY;


          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );


          const influenceRadius =
            65;


          if (
            distance <
              influenceRadius &&
            distance >
              0.001
          ) {
            const force =
              (
                influenceRadius -
                distance
              ) /
              influenceRadius;


            const strength =
              force *
              force *
              0.18;


            this.vx +=
              (
                dx /
                distance
              ) *
              strength;


            this.vy +=
              (
                dy /
                distance
              ) *
              strength;
          }
        }


        /* =========================================
           EVITAR RATÓN
        ========================================= */

        avoidMouse() {
          const inside =
            p.mouseX >= 0 &&
            p.mouseX <= canvasWidth &&
            p.mouseY >= 0 &&
            p.mouseY <= canvasHeight;


          if (!inside) {
            return;
          }


          const dx =
            this.x -
            p.mouseX;


          const dy =
            this.y -
            p.mouseY;


          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );


          const interactionRadius =
            135 +
            this.size *
            0.55;


          if (
            distance <
              interactionRadius &&
            distance >
              0.001
          ) {
            const force =
              (
                interactionRadius -
                distance
              ) /
              interactionRadius;


            const directionX =
              dx /
              distance;


            const directionY =
              dy /
              distance;


            const pushStrength =
              force *
              force *
              2.6;


            this.vx +=
              directionX *
              pushStrength *
              0.1;


            this.vy +=
              directionY *
              pushStrength *
              0.1;


            this.x +=
              directionX *
              pushStrength;


            this.y +=
              directionY *
              pushStrength;
          }
        }


        /* =========================================
           MOVIMIENTO NORMAL
        ========================================= */

        normalMovement() {
          this.edge = null;


          this.avoidText();

          this.avoidMouse();


          this.vx *= 0.992;

          this.vy *= 0.992;


          const speed =
            Math.sqrt(
              this.vx * this.vx +
              this.vy * this.vy
            );


          if (speed < 0.05) {
            const boost =
              p.map(
                this.size,
                16,
                74,
                0.018,
                0.008
              );


            this.vx +=
              p.random(
                -boost,
                boost
              );


            this.vy +=
              p.random(
                -boost,
                boost
              );
          }


          const maxSpeed =
            p.map(
              this.size,
              16,
              74,
              1.35,
              0.55
            );


          if (
            speed >
            maxSpeed
          ) {
            this.vx =
              (
                this.vx /
                speed
              ) *
              maxSpeed;


            this.vy =
              (
                this.vy /
                speed
              ) *
              maxSpeed;
          }
        }


        /* =========================================
           LÍMITES
        ========================================= */

        checkBounds() {
          const half =
            this.size / 2;


          if (
            this.x -
            half <
            0
          ) {
            this.x =
              half;

            this.vx =
              Math.abs(
                this.vx
              );
          }


          if (
            this.x +
            half >
            canvasWidth
          ) {
            this.x =
              canvasWidth -
              half;

            this.vx =
              -Math.abs(
                this.vx
              );
          }


          if (
            this.y -
            half <
            0
          ) {
            this.y =
              half;

            this.vy =
              Math.abs(
                this.vy
              );
          }


          if (
            this.y +
            half >
            canvasHeight
          ) {
            this.y =
              canvasHeight -
              half;

            this.vy =
              -Math.abs(
                this.vy
              );
          }
        }


        /* =========================================
           UPDATE
        ========================================= */

        update() {
          this.x += this.vx;

          this.y += this.vy;


          this.rotation +=
            this.rotationSpeed;


          if (
            panelOpenRef.current
          ) {
            this.retreatToEdge();


            this.vx *= 0.985;

            this.vy *= 0.985;
          }

          else {
            this.normalMovement();
          }


          this.checkBounds();
        }


        /* =========================================
           DRAW
        ========================================= */

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
            this.gray,
            this.gray,
            this.gray,
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
         CUADRADO DE EXPLOSIÓN
      ========================================= */

      class BurstSquare {
        constructor(
          x,
          y,
          angle,
          speed
        ) {
          this.x = x;
          this.y = y;


          this.size =
            p.random(
              5,
              15
            );


          this.vx =
            Math.cos(angle) *
            speed;


          this.vy =
            Math.sin(angle) *
            speed;


          this.rotation =
            p.random(
              0,
              p.TWO_PI
            );


          this.rotationSpeed =
            p.random(
              -0.06,
              0.06
            );


          const palette = [
            20,
            38,
            62,
            92,
            130,
            175,
            215,
          ];


          this.gray =
            p.random(
              palette
            );


          this.alpha =
            p.random(
              120,
              210
            );


          this.life = 1;


          this.radius =
            p.random(
              2,
              5
            );
        }


        update() {
          this.x += this.vx;

          this.y += this.vy;


          this.vx *= 0.94;

          this.vy *= 0.94;


          this.rotation +=
            this.rotationSpeed;


          this.rotationSpeed *=
            0.96;


          this.life -=
            0.028;


          this.alpha *=
            0.965;


          this.size *=
            0.988;
        }


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
            this.gray,
            this.gray,
            this.gray,
            this.alpha *
            this.life
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


        isDead() {
          return (
            this.life <= 0 ||
            this.alpha <= 1
          );
        }
      }


      /* =========================================
         CREAR EXPLOSIÓN
      ========================================= */

      const createBurst = (
        x,
        y
      ) => {
        const amount =
          Math.floor(
            p.random(
              BURST_MIN,
              BURST_MAX + 1
            )
          );


        for (
          let i = 0;
          i < amount;
          i++
        ) {
          const baseAngle =
            (
              p.TWO_PI /
              amount
            ) *
            i;


          const angle =
            baseAngle +
            p.random(
              -0.28,
              0.28
            );


          const speed =
            p.random(
              BURST_MIN_SPEED,
              BURST_MAX_SPEED
            );


          burstShapes.push(
            new BurstSquare(
              x,
              y,
              angle,
              speed
            )
          );
        }
      };


      triggerBurst =
        createBurst;


      /* =========================================
         CREAR CUADRADOS PRINCIPALES
      ========================================= */

      const createShapes = () => {
        shapes = [];


        let amount =
          Math.floor(
            canvasWidth /
            42
          );


        amount =
          p.constrain(
            amount,
            18,
            32
          );


        for (
          let i = 0;
          i < amount;
          i++
        ) {
          shapes.push(
            new FloatingSquare()
          );
        }
      };


      /* =========================================
         SETUP
      ========================================= */

      p.setup = () => {
        const container =
          containerRef.current;


        if (!container) {
          return;
        }


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


        p.frameRate(60);


        updateExclusionZone();

        createShapes();
      };


      /* =========================================
         DRAW
      ========================================= */

      p.draw = () => {
        p.clear();


        updateExclusionZone();


        /* =====================================
           CUADRADOS PRINCIPALES
        ===================================== */

        for (
          const shape
          of shapes
        ) {
          shape.update();

          shape.draw();
        }


        /* =====================================
           EXPLOSIONES
        ===================================== */

        for (
          const burst
          of burstShapes
        ) {
          burst.update();

          burst.draw();
        }


        burstShapes =
          burstShapes.filter(
            (burst) =>
              !burst.isDead()
          );
      };


      /* =========================================
         RESPONSIVE
      ========================================= */

      p.windowResized = () => {
        const container =
          containerRef.current;


        if (!container) {
          return;
        }


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

        burstShapes = [];
      };
    };


    /* =========================================
       CREAR P5
    ========================================= */

    const instance =
      new p5(
        sketch,
        containerRef.current
      );


    /* =========================================
       DETECTAR CLIC EN LA TARJETA
    ========================================= */

    const card =
      containerRef.current.closest(
        ".portfolio-card"
      );


    const handlePointerDown = (
      event
    ) => {
      /* =====================================
         NO EXPLOSIÓN EN ELEMENTOS INTERACTIVOS
      ===================================== */

      if (
        event.target.closest(
          "button, a, input, textarea, select, .panel-card"
        )
      ) {
        return;
      }


      const container =
        containerRef.current;


      if (
        !container ||
        !triggerBurst
      ) {
        return;
      }


      const rect =
        container.getBoundingClientRect();


      const x =
        event.clientX -
        rect.left;


      const y =
        event.clientY -
        rect.top;


      if (
        x < 0 ||
        x > rect.width ||
        y < 0 ||
        y > rect.height
      ) {
        return;
      }


      triggerBurst(
        x,
        y
      );
    };


    if (card) {
      card.addEventListener(
        "pointerdown",
        handlePointerDown
      );
    }


    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      if (card) {
        card.removeEventListener(
          "pointerdown",
          handlePointerDown
        );
      }


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