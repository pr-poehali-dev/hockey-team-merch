import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const playerStats = [
    { name: "Александр Волков", position: "Нападающий", goals: 25, assists: 18, points: 43 },
    { name: "Дмитрий Козлов", position: "Защитник", goals: 8, assists: 22, points: 30 },
    { name: "Иван Морозов", position: "Вратарь", saves: 892, wins: 28, percentage: 94.2 },
    { name: "Сергей Белов", position: "Нападающий", goals: 22, assists: 15, points: 37 }
  ];

  const jerseys = [
    { name: "Домашняя форма", price: "4 999 ₽", image: "/img/3b5fa326-3a18-45fd-bf0e-739e82ffae5c.jpg" },
    { name: "Гостевая форма", price: "4 999 ₽", image: "/img/3b5fa326-3a18-45fd-bf0e-739e82ffae5c.jpg" },
    { name: "Тренировочная", price: "2 999 ₽", image: "/img/3b5fa326-3a18-45fd-bf0e-739e82ffae5c.jpg" }
  ];

  const upcomingGames = [
    { opponent: "Спартак", date: "15 авг", time: "19:00", home: true },
    { opponent: "Динамо", date: "18 авг", time: "18:30", home: false },
    { opponent: "ЦСКА", date: "22 авг", time: "19:30", home: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url('/img/6071e1ff-5bcc-49df-8762-f1b33eaf2533.jpg')` }}
        ></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="font-oswald text-6xl md:text-8xl font-bold mb-6 tracking-wider">
            ЧЕМПИОНЫ
            <span className="block text-primary font-oswald">ЛЬДА</span>
          </h1>
          <p className="font-roboto text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Официальный сайт хоккейной команды. Следите за матчами, статистикой игроков и приобретайте оригинальную форму
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-oswald text-lg px-8 py-3">
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              КУПИТЬ ФОРМУ
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-oswald text-lg px-8 py-3">
              <Icon name="Calendar" className="mr-2" size={20} />
              РАСПИСАНИЕ
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-12">
            СТАТИСТИКА ИГРОКОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playerStats.map((player, index) => (
              <Card key={index} className="bg-black/50 border-team-silver/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="font-oswald text-lg text-white">{player.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit bg-primary/20 text-primary border-none">
                    {player.position}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  {player.position === "Вратарь" ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Сейвы:</span>
                        <span className="font-bold text-primary">{player.saves}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Победы:</span>
                        <span className="font-bold text-primary">{player.wins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">%:</span>
                        <span className="font-bold text-primary">{player.percentage}%</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Голы:</span>
                        <span className="font-bold text-primary">{player.goals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Передачи:</span>
                        <span className="font-bold text-primary">{player.assists}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Очки:</span>
                        <span className="font-bold text-primary">{player.points}</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-12">
            БЛИЖАЙШИЕ МАТЧИ
          </h2>
          <div className="space-y-4">
            {upcomingGames.map((game, index) => (
              <Card key={index} className="bg-gray-900 border-team-silver/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-oswald text-2xl font-bold text-primary">{game.date}</div>
                        <div className="text-sm text-gray-400">{game.time}</div>
                      </div>
                      <div className="h-12 w-px bg-team-silver/30"></div>
                      <div>
                        <div className="font-oswald text-xl font-bold">vs {game.opponent}</div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Icon name={game.home ? "Home" : "MapPin"} size={16} />
                          {game.home ? "Домашний матч" : "Выездной матч"}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Icon name="Ticket" className="mr-2" size={16} />
                      Билеты
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jersey Store Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-4">
            МАГАЗИН ФОРМЫ
          </h2>
          <p className="text-center text-gray-400 mb-12 font-roboto text-lg">
            Официальная игровая форма команды
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jerseys.map((jersey, index) => (
              <Card key={index} className="bg-black/50 border-team-silver/20 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-gray-800 relative overflow-hidden">
                  <img 
                    src={jersey.image} 
                    alt={jersey.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-oswald text-xl font-bold mb-2">{jersey.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-oswald text-2xl font-bold text-primary">{jersey.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-center mb-12">
            ПОСЛЕДНИЕ НОВОСТИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-team-silver/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-none">Победа</Badge>
                <h3 className="font-oswald text-xl font-bold mb-3">Разгромная победа над Торпедо 5:1</h3>
                <p className="text-gray-400 mb-4 font-roboto">Команда показала отличную игру в нападении и надежную защиту...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">12 августа 2024</span>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/50 border-team-silver/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-blue-500/20 text-blue-400 border-none">Трансфер</Badge>
                <h3 className="font-oswald text-xl font-bold mb-3">Подписан новый нападающий</h3>
                <p className="text-gray-400 mb-4 font-roboto">В команду перешел опытный форвард из КХЛ, который усилит атакующую линию...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">10 августа 2024</span>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-8">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Icon name="MapPin" size={32} className="text-primary mb-4" />
              <h3 className="font-oswald text-lg font-bold mb-2">АДРЕС</h3>
              <p className="text-gray-400 font-roboto">Ледовый дворец<br />ул. Спортивная, 15</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Phone" size={32} className="text-primary mb-4" />
              <h3 className="font-oswald text-lg font-bold mb-2">ТЕЛЕФОН</h3>
              <p className="text-gray-400 font-roboto">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon name="Mail" size={32} className="text-primary mb-4" />
              <h3 className="font-oswald text-lg font-bold mb-2">EMAIL</h3>
              <p className="text-gray-400 font-roboto">info@hockey-team.ru</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-oswald">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              НАПИСАТЬ НАМ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;