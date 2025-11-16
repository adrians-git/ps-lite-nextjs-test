import * as React from 'react';

interface AdReadyEmailPreviewProps {
  agentName?: string;
  propertyAddress?: string;
  campaignId?: string;
  expiresInHours?: number;
}

export const AdReadyEmailPreview = ({
  agentName = 'Agent',
  propertyAddress = '345 Rim Shadows Dr, Sedona, AZ 86336',
  campaignId = 'demo',
  expiresInHours = 24,
}: AdReadyEmailPreviewProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const reviewUrl = `${baseUrl}/ad-preview/${campaignId}?utm_source=email&utm_campaign=ad_ready`;

  return (
    <div style={main}>
      <div style={container}>
        {/* Header / Logo */}
        <div style={header}>
          <p style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#c05c3e',
            margin: '0',
            textAlign: 'center',
          }}>
            PropertySimple
          </p>
        </div>

        {/* Hero Section */}
        <div style={hero}>
          <h1 style={h1}>Your Campaign to Reach 10,000+ Buyers is Ready</h1>
          <p style={propertyText}>{propertyAddress}</p>
        </div>

        {/* Video Preview - Actual Thumbnails */}
        <div style={videoSection}>
          <a href={reviewUrl} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center' as const,
              cursor: 'pointer',
            }}>
              <p style={{
                color: '#2a1810',
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 16px',
              }}>
                👇 Click to Preview Your Campaign Videos
              </p>
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                {/* Property Tour Thumbnail */}
                <div style={{
                  width: '140px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  position: 'relative' as const,
                }}>
                  <img
                    src={`${baseUrl}/lovable-uploads/8de08966-0714-4ca1-b64b-8098de65220a.png`}
                    alt="Property Tour Video"
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute' as const,
                    bottom: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#c05c3e',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '600',
                  }}>
                    Property Tour
                  </div>
                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute' as const,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  }}>
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: '14px solid #c05c3e',
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      marginLeft: '3px',
                    }} />
                  </div>
                </div>

                {/* AI Influencer Thumbnail */}
                <div style={{
                  width: '140px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  position: 'relative' as const,
                }}>
                  <img
                    src={`${baseUrl}/lovable-uploads/263dbc78-040e-40ba-880a-bfd68263a6f3.png`}
                    alt="AI Influencer Video"
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div style={{
                    position: 'absolute' as const,
                    bottom: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#d4a574',
                    color: '#2a1810',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '600',
                  }}>
                    AI Influencer
                  </div>
                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute' as const,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  }}>
                    <div style={{
                      width: '0',
                      height: '0',
                      borderLeft: '14px solid #c05c3e',
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      marginLeft: '3px',
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Body Copy */}
        <div style={content}>
          <p style={paragraph}>
            We just finished creating two professional ads for {propertyAddress}:
          </p>
          <div style={checklistItem}>
            <span style={checkmark}>✅</span>
            <p style={checklistText}>Property Tour Video (photo slideshow)</p>
          </div>
          <div style={checklistItem}>
            <span style={checkmark}>✅</span>
            <p style={checklistText}>AI Influencer Video (presenter-style)</p>
          </div>
          <p style={paragraph}>
            Review your ads and launch your campaign to reach 10,000+ potential buyers.
          </p>
        </div>

        {/* Urgency Bar */}
        <div style={urgencyBar}>
          <p style={urgencyText}>
            ⏰ Review within {expiresInHours} hours to launch
          </p>
        </div>

        {/* CTA Button */}
        <div style={ctaSection}>
          <a style={button} href={reviewUrl}>
            Review My Ads →
          </a>
        </div>

        {/* Social Proof Footer */}
        <div style={footer}>
          <p style={socialProof}>
            Join 30,000+ agents using PropertySimple ⭐⭐⭐⭐⭐
          </p>
          <p style={footerText}>
            Questions? Reply to this email or visit propertysimple.com/support
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdReadyEmailPreview;

// Styles
const main = {
  backgroundColor: '#faf8f6', // Warm cream background
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 0 60px',
  maxWidth: '600px',
};

const header = {
  padding: '40px 20px',
  textAlign: 'center' as const,
};

const hero = {
  padding: '0 20px 40px',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#2a1810', // Dark foreground
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.2',
  margin: '0 0 16px',
};

const propertyText = {
  color: '#c05c3e', // Terracotta primary
  fontSize: '18px',
  fontWeight: '600',
  margin: '0',
};

const videoSection = {
  padding: '0 20px 40px',
};

const videoPlaceholder = {
  backgroundColor: '#1a1a1a',
  borderRadius: '12px',
  padding: '100px 20px',
  textAlign: 'center' as const,
  backgroundImage: 'linear-gradient(135deg, #c05c3e 0%, #d4a574 100%)',
};

const videoPlaceholderText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 8px',
};

const videoSubtext = {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '14px',
  margin: '0',
};

const content = {
  padding: '0 20px 32px',
};

const paragraph = {
  color: '#2a1810',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px',
};

const checklistItem = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '16px',
};

const checkmark = {
  fontSize: '18px',
  marginRight: '8px',
  flexShrink: 0,
};

const checklistText = {
  color: '#2a1810',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
};

const urgencyBar = {
  backgroundColor: '#fff4ed', // Light terracotta tint
  borderRadius: '8px',
  padding: '20px 20px',
  margin: '0 20px 40px',
  textAlign: 'center' as const,
  border: '2px solid #c05c3e',
};

const urgencyText = {
  color: '#c05c3e',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
};

const ctaSection = {
  padding: '0 20px 40px',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#c05c3e', // Terracotta primary
  borderRadius: '8px',
  color: '#fff',
  fontSize: '18px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '16px 48px',
  cursor: 'pointer',
};

const footer = {
  padding: '40px 20px 0',
  borderTop: '1px solid #e5ddd5',
  textAlign: 'center' as const,
};

const socialProof = {
  color: '#2a1810',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 20px',
};

const footerText = {
  color: '#6b5b4f', // Muted foreground
  fontSize: '12px',
  lineHeight: '1.6',
  margin: '0',
};
