import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { User, UserCheck, UserX, Users, UserCog } from "lucide-react";
import { WelcomeSection } from "./sections/WelcomeSection";

export const AdminDashboardHome = () => {
  const loginData = [
    { name: "Currently Online", value: 45 },
    { name: "Currently Offline", value: 82 },
  ];

  const userStatusData = [
    { name: "Enabled Users", value: 120 },
    { name: "Disabled Users", value: 30 },
  ];

  const COLORS = ["#4ade80", "#f87171"];

  const totalUsers = userStatusData.reduce((acc, curr) => acc + curr.value, 0);
  const onlineUsers = loginData[0].value;
  const offlineUsers = loginData[1].value;
  const enabledUsers = userStatusData[0].value;

  // Custom component for stat cards to reduce repetition
  const StatCard = ({ title, value, icon: Icon, color }) => (
    <Card className="bg-white">
      <CardBody className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <Typography
              variant="small"
              className="text-blue-gray-600 font-medium truncate"
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              color={color}
              className="text-lg sm:text-2xl"
            >
              {value}
            </Typography>
          </div>
          <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-blue-500 flex-shrink-0 ml-2" />
        </div>
      </CardBody>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="w-full">
            <WelcomeSection />
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Users"
              value={totalUsers}
              icon={Users}
              color="blue-gray"
            />
            <StatCard
              title="Online Users"
              value={onlineUsers}
              icon={UserCheck}
              color="green"
            />
            <StatCard
              title="Offline Users"
              value={offlineUsers}
              icon={UserX}
              color="red"
            />
            <StatCard
              title="Enabled Users"
              value={enabledUsers}
              icon={UserCog}
              color="blue"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Login Status */}
            <Card className="bg-white">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="p-4"
              >
                <div className="flex items-center space-x-2">
                  <UserCheck className="h-5 w-5 text-green-500" />
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-base sm:text-lg"
                  >
                    User Login Status
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="px-2 pb-0">
                <div className="h-48 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={loginData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12 }}
                        interval={0}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardBody>
              <CardFooter className="px-4 py-2">
                <Typography
                  variant="small"
                  className="text-gray-600 text-xs sm:text-sm"
                >
                  Real-time user activity tracking
                </Typography>
              </CardFooter>
            </Card>

            {/* User Account Status */}
            <Card className="bg-white">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="p-4"
              >
                <div className="flex items-center space-x-2">
                  <UserX className="h-5 w-5 text-red-500" />
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="text-base sm:text-lg"
                  >
                    User Account Status
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="px-2 pb-0">
                <div className="h-48 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={window.innerWidth < 640 ? 60 : 80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {userStatusData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardBody>
              <CardFooter className="px-4 py-2">
                <Typography
                  variant="small"
                  className="text-gray-600 text-xs sm:text-sm"
                >
                  Overview of user account statuses
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
