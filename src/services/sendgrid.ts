import sgMail from '@sendgrid/mail';
import sgClient from '@sendgrid/client';

// Initialize SendGrid with your API key
export const initializeSendGrid = (apiKey: string) => {
  sgMail.setApiKey(apiKey);
  sgClient.setApiKey(apiKey);
};

// Send a campaign email to multiple recipients
export const sendCampaign = async (
  subject: string,
  htmlContent: string,
  recipients: string[]
) => {
  const msg = {
    to: recipients,
    from: process.env.SENDGRID_VERIFIED_SENDER,
    subject,
    html: htmlContent,
    trackingSettings: {
      clickTracking: { enable: true },
      openTracking: { enable: true }
    }
  };

  return sgMail.sendMultiple(msg);
};

// Get campaign statistics
export const getCampaignStats = async (campaignId: string) => {
  const [response] = await sgClient.request({
    method: 'GET',
    url: `/v3/marketing/stats/campaigns/${campaignId}`
  });
  return response.body;
};