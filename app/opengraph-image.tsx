import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FDF7E4",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 60,
            width: 220,
            height: 220,
            borderRadius: "45% 55% 60% 40% / 50% 45% 55% 50%",
            background: "#FFD84A",
            display: "flex",
          }}
        />
        <p
          style={{
            fontSize: 22,
            color: "#55556B",
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 24,
          }}
        >
          DATA SCIENCE &amp; ML ENGINEER
        </p>
        <h1
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: "#14141C",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          Jayesh Desai
        </h1>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            width: 80,
            height: 6,
            background: "#6C4EF6",
            borderRadius: 3,
          }}
        />
        <p style={{ fontSize: 26, color: "#55556B", marginTop: 30 }}>
          B.Tech CSE · Ahmedabad, India
        </p>
      </div>
    ),
    { ...size }
  );
}
