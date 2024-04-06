import MetaProtocolContent from '@/components/Dashboard/MetaProtocolContent';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function Dashboard() {
  return (
    <PageContainer title='All MetaProtocols'>
      <MetaProtocolContent />
    </PageContainer>
  );
}
