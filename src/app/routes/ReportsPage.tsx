
import React from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import ReportsPageContent from "@/features/ReportsPage/ReportsPageContent";

export default function ReportsPage() {
    return (
        <DashboardLayout>
            <main className="flex-1 p-6 bg-slate-50 min-h-screen">
                <ReportsPageContent />
            </main>
        </DashboardLayout>
    );
}