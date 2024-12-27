import React from 'react';
import { BarChart3, Mail, Users, MousePointerClick } from 'lucide-react';
import { Campaign } from '../../types/campaign';

interface MetricsProps {
  campaign: Campaign;
}

export const CampaignMetrics: React.FC<MetricsProps> = ({ campaign }) => {
  const { stats } = campaign;
  
  if (!stats) return null;

  const openRate = ((stats.opens / stats.totalRecipients) * 100).toFixed(1);
  const clickRate = ((stats.clicks / stats.totalRecipients) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <Users className="h-8 w-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Total Recipients</p>
            <p className="text-2xl font-semibold">{stats.totalRecipients}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <Mail className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Open Rate</p>
            <p className="text-2xl font-semibold">{openRate}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <MousePointerClick className="h-8 w-8 text-purple-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Click Rate</p>
            <p className="text-2xl font-semibold">{clickRate}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <BarChart3 className="h-8 w-8 text-orange-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-600">Engagement Score</p>
            <p className="text-2xl font-semibold">
              {Math.round((Number(openRate) + Number(clickRate)) / 2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};