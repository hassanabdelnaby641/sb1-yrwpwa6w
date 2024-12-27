export interface Campaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  status: 'draft' | 'sent' | 'scheduled';
  sentAt?: Date;
  scheduledFor?: Date;
  stats?: CampaignStats;
}

export interface CampaignStats {
  opens: number;
  clicks: number;
  bounces: number;
  unsubscribes: number;
  totalRecipients: number;
}