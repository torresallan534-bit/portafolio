import { ImageResponse } from "next/og";

export const alt = "Panda Haus — Estudio de Diseño Visual & Web Comercial";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          backgroundColor: "#0D0D0D",
          backgroundImage:
            "linear-gradient(135deg, #0D0D0D 0%, #16181A 55%, #2B2F33 100%)",
          color: "#F2F4F3",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Header Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#3DDC97",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "24px",
                color: "#0D0D0D",
              }}
            >
              PH
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                Panda Haus
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#3DDC97",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Estudio Visual &amp; Web Comercial
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "rgba(61, 220, 151, 0.12)",
              border: "1px solid rgba(61, 220, 151, 0.3)",
              fontSize: "15px",
              color: "#3DDC97",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: "#3DDC97",
              }}
            />
            Cupos Abiertos para Proyectos
          </div>
        </div>

        {/* Central Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "54px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#FFFFFF",
            }}
          >
            Diseño visual y páginas web que hacen destacar tu negocio.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#F2F4F3",
              opacity: 0.85,
              lineHeight: 1.45,
              fontWeight: 400,
            }}
          >
            Ayudamos a restaurantes, marcas y negocios locales a captar clientes
            con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.
          </div>
        </div>

        {/* Bottom Specialties Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: "1px solid rgba(242, 244, 243, 0.1)",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "10px",
                backgroundColor: "rgba(61, 220, 151, 0.15)",
                color: "#3DDC97",
                border: "1px solid rgba(61, 220, 151, 0.35)",
              }}
            >
              Flyers &amp; Redes
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "10px",
                backgroundColor: "rgba(43, 47, 51, 0.6)",
                color: "#FFFFFF",
                border: "1px solid rgba(242, 244, 243, 0.12)",
              }}
            >
              Menús &amp; Cartas QR
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "10px",
                backgroundColor: "rgba(43, 47, 51, 0.6)",
                color: "#FFFFFF",
                border: "1px solid rgba(242, 244, 243, 0.12)",
              }}
            >
              Landing Pages de Conversión
            </div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                borderRadius: "10px",
                backgroundColor: "rgba(43, 47, 51, 0.6)",
                color: "#FFFFFF",
                border: "1px solid rgba(242, 244, 243, 0.12)",
              }}
            >
              Branding &amp; Identidad
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              color: "#3DDC97",
              fontWeight: 700,
            }}
          >
            <span>Entrega 24-48h</span>
            <span style={{ color: "rgba(242, 244, 243, 0.4)" }}>•</span>
            <span>100% Optimizado</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
