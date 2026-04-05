import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F5",
          borderRadius: "36px",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="32" r="5" fill="#C8553D" opacity="0.25" />
          <line
            x1="20"
            y1="34"
            x2="20"
            y2="16"
            stroke="#C8553D"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17"
            fill="#C8553D"
            opacity="0.75"
          />
          <path
            d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16"
            fill="#C8553D"
            opacity="0.55"
          />
          <path
            d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14"
            fill="#C8553D"
            opacity="0.92"
          />
          <circle cx="20" cy="34" r="2.5" fill="#C8553D" />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
