"use client";

import React, { useState } from "react";
import {
  Bell, User, LogOut, ChevronDown, Plus,
  Image, FileText, Edit,
  BarChart, Settings, Eye, Trash2,
  AlertCircle, LayoutGrid
} from "lucide-react";

// Shadcn components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Components
const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
    <div className="p-4 border-b border-gray-200 flex items-center gap-2">
      <div className="bg-blue-600 text-white p-2 rounded-md">
        <Image size={20} />
      </div>
      <h1 className="text-xl font-bold">SAS Design</h1>
    </div>

    <nav className="flex-1 p-4">
      <ul className="space-y-2">
        {[
          { id: "dashboard", icon: <BarChart className="mr-2 h-4 w-4" />, text: "Dashboard" },
          { id: "banners", icon: <Image className="mr-2 h-4 w-4" />, text: "Banners" },
          { id: "news", icon: <AlertCircle className="mr-2 h-4 w-4" />, text: "Notícias" },
          { id: "blog", icon: <FileText className="mr-2 h-4 w-4" />, text: "Blog Institucional" },
          { id: "media", icon: <LayoutGrid className="mr-2 h-4 w-4" />, text: "Biblioteca de Mídia" },
          { id: "settings", icon: <Settings className="mr-2 h-4 w-4" />, text: "Configurações" }
        ].map(item => (
          <li key={item.id}>
            <Button
              variant={activeTab === item.id ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === item.id ? "bg-blue-600" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              {item.text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>

    <UserMenu />
  </div>
);

const UserMenu = () => (
  <div className="p-4 border-t border-gray-200">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src="" />
            <AvatarFallback className="bg-blue-100 text-blue-600">CR</AvatarFallback>
          </Avatar>
          <span className="truncate">Cloves Rodrigues</span>
          <ChevronDown className="ml-auto h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

const Header = ({ activeTab }) => (
  <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold">
      {activeTab === "dashboard" && "Dashboard do Designer"}
      {activeTab === "banners" && "Gerenciamento de Banners"}
      {activeTab === "news" && "Gerenciamento de Notícias"}
      {activeTab === "blog" && "Blog Institucional"}
      {activeTab === "media" && "Biblioteca de Mídia"}
      {activeTab === "settings" && "Configurações"}
    </h1>

    <div className="flex items-center gap-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Buscar..."
          className="pl-10 w-64"
        />
        <Eye className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      <NotificationBell count={2} />

      <div className="border-l border-gray-200 h-8 mx-2" />

      <HeaderUserMenu />
    </div>
  </header>
);

const NotificationBell = ({ count }) => (
  <Button variant="outline" className="relative">
    <Bell size={20} />
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        {count}
      </span>
    )}
  </Button>
);

const HeaderUserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-blue-100 text-blue-600">CR</AvatarFallback>
          </Avatar>
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
      <DropdownMenuItem>Configurações</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Sair</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const QuickActionsCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Atalhos Rápidos</CardTitle>
      <CardDescription>Acesse as funcionalidades mais usadas</CardDescription>
    </CardHeader>
    <CardContent className="grid grid-cols-2 gap-4">
      {[
        { icon: <Image size={24} className="text-blue-600" />, text: "Novo Banner" },
        { icon: <AlertCircle size={24} className="text-blue-600" />, text: "Nova Notícia" },
        { icon: <FileText size={24} className="text-blue-600" />, text: "Novo Post" },
        { icon: <LayoutGrid size={24} className="text-blue-600" />, text: "Upload de Mídia" }
      ].map((action, index) => (
        <Button key={index} variant="outline" className="h-24 flex flex-col items-center justify-center gap-2">
          {action.icon}
          <span>{action.text}</span>
        </Button>
      ))}
    </CardContent>
  </Card>
);

const StatsCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Estatísticas</CardTitle>
      <CardDescription>Resumo de desempenho</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        { label: "Banners Ativos", value: "7" },
        { label: "Notícias Publicadas", value: "12" },
        { label: "Posts no Blog", value: "24" },
        { label: "Arquivos na Biblioteca", value: "156" }
      ].map((stat, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-sm font-medium">{stat.label}</span>
          <span className="font-bold">{stat.value}</span>
        </div>
      ))}
    </CardContent>
  </Card>
);

const ScheduledPublicationsCard = () => {
  const publications = [
    { title: "Banner Lateral - Recursos", date: "20 Abr, 2025", type: "Banner", color: "bg-amber-600" },
    { title: "Novo recurso: Assistente", date: "18 Abr, 2025", type: "Notícia", color: "bg-blue-600" },
    { title: "Dados para resultados educacionais", date: "22 Abr, 2025", type: "Blog", color: "bg-green-600" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Publicações Agendadas</CardTitle>
        <CardDescription>Próximos 7 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium truncate">{pub.title}</p>
                <p className="text-sm text-gray-500">{pub.date}</p>
              </div>
              <Badge className={pub.color}>{pub.type}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="ml-auto text-blue-600">
          Ver agenda completa
        </Button>
      </CardFooter>
    </Card>
  );
};

const RecentActivityCard = () => {
  const activities = [
    {
      icon: <Image size={16} />,
      iconColor: "bg-blue-100 text-blue-600",
      title: "Banner Principal - Homepage atualizado",
      time: "Há 2 horas",
      description: "Você alterou a imagem e o texto do banner"
    },
    {
      icon: <AlertCircle size={16} />,
      iconColor: "bg-green-100 text-green-600",
      title: 'Notícia "Confira agora: Mundo Exponencial" publicada',
      time: "Há 5 horas",
      description: "A notícia foi destacada na página inicial"
    },
    {
      icon: <FileText size={16} />,
      iconColor: "bg-amber-100 text-amber-600",
      title: "Post do blog agendado",
      time: "Há 1 dia",
      description: 'Post "Como utilizar dados para melhorar resultados educacionais"'
    }
  ];

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
        <CardDescription>Últimas ações no sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`p-2 rounded-full ${activity.iconColor}`}>
                {activity.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="ml-auto text-blue-600">
          Ver todo histórico
        </Button>
      </CardFooter>
    </Card>
  );
};

const ContentAnalyticsCard = () => {
  const metrics = [
    { label: "Visualizações de Banners", value: "2.457", percentage: "w-9/12" },
    { label: "Cliques em Notícias", value: "1.873", percentage: "w-7/12" },
    { label: "Leituras do Blog", value: "982", percentage: "w-5/12" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise de Conteúdo</CardTitle>
        <CardDescription>Desempenho dos últimos 30 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{metric.label}</span>
                <span>{metric.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-blue-600 h-2 rounded-full ${metric.percentage}`}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="ml-auto text-blue-600">
          Ver relatórios completos
        </Button>
      </CardFooter>
    </Card>
  );
};

const DashboardTab = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <QuickActionsCard />
    <StatsCard />
    <ScheduledPublicationsCard />
    <RecentActivityCard />
    <ContentAnalyticsCard />
  </div>
);

const BannerForm = ({ onClose }) => (
  <>
    <DialogHeader>
      <DialogTitle>Criar Novo Banner</DialogTitle>
      <DialogDescription>
        Preencha as informações para criar um novo banner.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Título</label>
        <Input className="col-span-3" placeholder="Título do banner" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Localização</label>
        <Select>
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Selecione a localização" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="homepage">Homepage</SelectItem>
            <SelectItem value="dashboard">Dashboard</SelectItem>
            <SelectItem value="recursos">Página de Recursos</SelectItem>
            <SelectItem value="aulas">Sala de Aula</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Imagem</label>
        <Input className="col-span-3" type="file" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Link</label>
        <Input className="col-span-3" placeholder="URL de destino (opcional)" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Descrição</label>
        <Textarea className="col-span-3" placeholder="Descrição do banner" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Publicação</label>
        <div className="col-span-3 flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Publicar Agora</SelectItem>
              <SelectItem value="schedule">Agendar</SelectItem>
              <SelectItem value="draft">Salvar como Rascunho</SelectItem>
            </SelectContent>
          </Select>
          <Input type="date" className="w-full" />
        </div>
      </div>
    </div>
    <DialogFooter>
      <Button variant="outline" onClick={onClose}>Cancelar</Button>
      <Button className="bg-blue-600">Salvar Banner</Button>
    </DialogFooter>
  </>
);

const BannerListItem = ({ banner }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="py-3 px-4">{banner.title}</td>
    <td className="py-3 px-4">{banner.location}</td>
    <td className="py-3 px-4">
      <Badge className={
        banner.status === "Ativo" ? "bg-green-600" :
        banner.status === "Agendado" ? "bg-blue-600" :
        "bg-gray-600"
      }>
        {banner.status}
      </Badge>
    </td>
    <td className="py-3 px-4">{banner.date}</td>
    <td className="py-3 px-4 text-right">
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <Eye size={16} />
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <Edit size={16} />
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600">
        <Trash2 size={16} />
      </Button>
    </td>
  </tr>
);

const BannerTab = () => {
  const banners = [
    { id: 1, title: "Banner Principal - Homepage", location: "Homepage", status: "Ativo", date: "15 Abr, 2025" },
    { id: 2, title: "Banner Lateral - Recursos", location: "Página de Recursos", status: "Agendado", date: "20 Abr, 2025" },
    { id: 3, title: "Banner Dashboard - Novidades", location: "Dashboard", status: "Rascunho", date: "-" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Banners</h2>
          <p className="text-gray-500">Gerencie os banners do sistema</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600">
              <Plus className="mr-2 h-4 w-4" />
              Novo Banner
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <BannerForm onClose={() => {}} />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="active">Ativos</TabsTrigger>
          <TabsTrigger value="scheduled">Agendados</TabsTrigger>
          <TabsTrigger value="draft">Rascunhos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Título</th>
                    <th className="text-left py-3 px-4 font-medium">Localização</th>
                    <th className="text-left py-3 px-4 font-medium">Status</th>
                    <th className="text-left py-3 px-4 font-medium">Data</th>
                    <th className="text-right py-3 px-4 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {banners.map(banner => (
                    <BannerListItem key={banner.id} banner={banner} />
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <div className="bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">Apenas 1 banner ativo</h3>
                <p className="text-gray-500 mb-4">Você pode adicionar mais banners ou editar os existentes</p>
                <Button className="bg-blue-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Criar Novo Banner
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="mt-4">
          {/* Similar content as "all" tab but filtered */}
        </TabsContent>

        <TabsContent value="draft" className="mt-4">
          {/* Similar content as "all" tab but filtered */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Main Component
const DesignerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 overflow-auto">
        <Header activeTab={activeTab} />

        <div className="p-6">
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "banners" && <BannerTab />}
          {activeTab === "news" && (
            <div>
              <h2 className="text-xl font-bold">Gerenciamento de Notícias</h2>
              {/* News management interface similar to banners */}
            </div>
          )}
          {activeTab === "blog" && (
            <div>
              <h2 className="text-xl font-bold">Blog Institucional</h2>
              {/* Blog management interface */}
            </div>
          )}
          {activeTab === "media" && (
            <div>
              <h2 className="text-xl font-bold">Biblioteca de Mídia</h2>
              {/* Media library interface */}
            </div>
          )}
          {activeTab === "settings" && (
            <div>
              <h2 className="text-xl font-bold">Configurações</h2>
              {/* Settings interface */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignerDashboard;