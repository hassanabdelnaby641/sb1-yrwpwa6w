import React from 'react';
import { CampaignMetrics } from './components/Dashboard/CampaignMetrics';
import { CampaignEditor } from './components/Campaign/CampaignEditor';

function App() {
  // Example campaign data
  const campaign = {
    id: '1',
    name: 'Welcome Campaign',
    subject: 'Welcome to our Newsletter!',
    content: 'Thank you for subscribing...',
    status: 'sent',
    sentAt: new Date(),
    stats: {
      opens: 150,
      clicks: 75,
      bounces: 2,
      unsubscribes: 1,
      totalRecipients: 200
    }
  };

  const handleSaveCampaign = (campaignData: { subject: string; content: string }) => {
    console.log('Saving campaign:', campaignData);
    // Implement campaign saving logic
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Marketing Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Campaign Metrics</h2>
          <CampaignMetrics campaign={campaign} />
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Campaign</h2>
          <CampaignEditor onSave={handleSaveCampaign} />
        </div>
      </div>
    </div>
  );
}

export default App;