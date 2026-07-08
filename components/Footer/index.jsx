import { Col, Row } from "antd";
import React from "react";
import Box from "components/Box";
import LogoImage from "assets/image/hosting/ais-logo.png";
import BgImage from "assets/image/hosting/footer-bg.png";
import Container from "components/UI/Container";
import { Image, FooterWhiteLink } from "./index.style";
import { useTranslation } from "components/Utils/useTranslation";

const GlobalFooter = () => {
  const { t } = useTranslation();
  return (
    <Box 
      style={{ 
        background: `linear-gradient(rgba(0, 121, 193, 0.95), rgba(0, 121, 193, 0.95)), url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: "#ffffff", 
        paddingTop: '40px', 
        paddingBottom: '0px',
        fontFamily: "Roboto, sans-serif" 
      }}
    >
      <Container>
        <div style={{ width: '100%' }}>
          <Row type="flex" justify="space-between" align="middle" style={{ paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
            <Col xs={24} md={18} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ position: 'relative', width: '65.67px', height: '80px', flexShrink: 0, marginRight: '20px' }}>
                <Image 
                  style={{ position: 'absolute', left: '0px', top: '0px', width: '65.67px', height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
                  src={LogoImage} 
                  alt="logo" 
                />
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  {t("footer.academy_name")}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '5px' }}>
                  {t("footer.system_title")}
                </div>
              </div>
            </Col>

            <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
              <a href="https://www.facebook.com/ptittuyensinh/" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
                <svg width="18" height="18" fill="white" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
              <a href="https://www.youtube.com/@pchannels" target="_blank" rel="noreferrer" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
                <svg width="20" height="20" fill="white" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
            </Col>
          </Row>

          <Row style={{ paddingTop: '30px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.3)' }} gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div style={{ marginBottom: '15px', color: '#88CEF5', fontSize: '16px', fontWeight: 'bold' }}>
                {t("footer.company_name")}
              </div>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', marginBottom: '4px' }}>
                  {t("footer.thu_thiem_title")}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.4' }}>
                  {t("footer.thu_thiem_addr")}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', marginTop: '4px' }}>
                  {t("footer.thu_thiem_tel")}
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ffffff', marginBottom: '4px' }}>
                  {t("footer.thao_dien_title")}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: '1.4' }}>
                  {t("footer.thao_dien_addr")}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', marginTop: '4px' }}>
                  {t("footer.thao_dien_tel")}
                </div>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>
                {t("footer.email_label")}
              </div>
            </Col>

            <Col xs={24} md={6}>
              <div style={{ textTransform: 'uppercase', color: '#88CEF5', marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>
                {t("footer.more_info")}
              </div>
              <div style={{ marginBottom: '12px' }}>
                <FooterWhiteLink href="https://www.aisvietnam.com/careers" target="_blank" style={{ color: 'white', fontSize: '16px' }}>
                  {t("footer.careers")}
                </FooterWhiteLink>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <FooterWhiteLink href="https://www.aisvietnam.com/admissions/admissions-process" target="_blank" style={{ color: 'white', fontSize: '16px' }}>
                  {t("footer.admissions_process")}
                </FooterWhiteLink>
              </div>
            </Col>

            <Col xs={24} md={6}>
              <div style={{ textTransform: 'uppercase', color: '#88CEF5', marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>
                {t("footer.follow_us")}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="https://www.instagram.com/aissaigon/" target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" fill="white" viewBox="0 0 448 512"><path d="M224,122.862a93.138,93.138,0,1,0,93.138,93.138A93.138,93.138,0,0,0,224,122.862Zm0,152.938a59.8,59.8,0,1,1,59.8-59.8A59.8,59.8,0,0,1,224,275.8ZM359,101.462a34.331,34.331,0,1,0-34.331,34.331A34.331,34.331,0,0,0,359,101.462ZM448,152.062V359.938C448,414.738,409.838,448,359.938,448H88.062C38.162,448,0,414.738,0,359.938V152.062C0,97.262,38.162,64,88.062,64H359.938C409.838,64,448,97.262,448,152.062Zm-44.8,207.876V152.062c0-30.8-21.738-43.262-43.262-43.262H88.062c-21.524,0-43.262,12.462-43.262,43.262V359.938c0,30.8,21.738,43.262,43.262,43.262H359.938C381.462,403.2,403.2,390.738,403.2,359.938Z"/></svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/AISSaigon/" target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" fill="white" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                  Facebook
                </a>
                <a href="https://www.linkedin.com/company/australian-international-school-vietnam/" target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" fill="white" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88V448zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                  LinkedIn
                </a>
                <a href="https://www.youtube.com/@pchannels" target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="18" height="18" fill="white" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                  Youtube
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div style={{ backgroundColor: "#005F99", padding: "24px 0", marginTop: "20px" }}>
        <Container>
          <Row>
            <Col span={24} style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: '13px' }}>
              © Copyright {new Date().getFullYear()} {t("footer.copyright")}
            </Col>
          </Row>
        </Container>
      </div>

    </Box>
  );
};

export default GlobalFooter;
