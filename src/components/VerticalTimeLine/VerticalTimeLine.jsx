import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 0;
`;

const RailSvg = styled.svg`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  overflow: visible;
  pointer-events: none; /* decorativo */
`;

const Node = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #2b2b2f;
  box-shadow:
    0 0 12px 4px rgba(88, 164, 255, 0.35),
    inset 0 0 24px 8px rgba(247, 37, 133, 0.18);
`;

const Label = styled.div`
  position: absolute;
  transform: translateY(-50%);
  color: #cfd6e4;
`;

export default function VerticalTimeline({
  items = [
    { side: "left", title: "Lorem ipsum", text: "Lorem ipsum dolor sit" },
    { side: "right", title: "Lorem ipsum", text: "Lorem ipsum dolor sit" },
    { side: "left", title: "Lorem ipsum", text: "Lorem ipsum dolor sit" },
    { side: "right", title: "Lorem ipsum", text: "Lorem ipsum dolor sit" }
  ]
}) {
  // medidas base
  const nodeSize = 96;     // diâmetro do círculo
  const wrapSize = 120;    // quadrado arredondado que “abraça” o círculo
  const wrapRadius = 12;
  const stroke = 4;
  const spokeLen = 72;     // haste lateral
  const gap = 180;         // distância vertical entre nós
  const paddingTop = 40;

  const height = paddingTop * 2 + (items.length - 1) * gap + nodeSize;
  const centers = items.map((_, i) => paddingTop + i * gap + nodeSize / 2);

  return (
    <Wrapper>
      {/* SVG INLINE: trilho, “abraços” (rect) e hastes */}
      <RailSvg width="1" height={height} viewBox={`-240 0 480 ${height}`} aria-hidden>
        <defs>
          <linearGradient id="neon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#58a4ff" />
            <stop offset="100%" stopColor="#f72585" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="url(#neon)" strokeWidth={stroke} fill="none" filter="url(#glow)">
          {/* trilho vertical */}
          <line x1="0" y1="0" x2="0" y2={height} />

          {/* wraps + hastes por item */}
          {centers.map((cy, i) => {
            const x = -wrapSize / 2;
            const y = cy - wrapSize / 2;
            const isLeft = items[i].side === "left";
            return (
              <g key={i}>
                <rect x={x} y={y} width={wrapSize} height={wrapSize} rx={wrapRadius} ry={wrapRadius} />
                {isLeft ? (
                  <line
                    x1={-wrapSize / 2}
                    y1={cy}
                    x2={-wrapSize / 2 - spokeLen}
                    y2={cy}
                    strokeLinecap="round"
                  />
                ) : (
                  <line
                    x1={wrapSize / 2}
                    y1={cy}
                    x2={wrapSize / 2 + spokeLen}
                    y2={cy}
                    strokeLinecap="round"
                  />
                )}
              </g>
            );
          })}
        </g>
      </RailSvg>

      {/* círculos e labels posicionados por cima */}
      {centers.map((cy, i) => {
        const isLeft = items[i].side === "left";
        return (
          <React.Fragment key={`n-${i}`}>
            <Node style={{ top: cy - nodeSize / 2 }} />
            <Label
              style={
                isLeft
                  ? { top: cy, right: `calc(50% + ${wrapSize / 2 + spokeLen + 16}px)`, textAlign: "right" }
                  : { top: cy, left: `calc(50% + ${wrapSize / 2 + spokeLen + 16}px)` }
              }
            >
              <strong style={{ display: "block", color: "#fff" }}>{items[i].title}</strong>
              <small>{items[i].text}</small>
            </Label>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}