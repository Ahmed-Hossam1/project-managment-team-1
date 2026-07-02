import DashboardLayout from "@/components/layout/dashboard-layout";
import PageContainer from "@/components/layout/PageContainer";
import Dashboard from "@/features/Dashboard/DashboardPage";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <PageContainer>
        <Dashboard />
      </PageContainer>
    </DashboardLayout>
  );
}
