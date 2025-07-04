import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { ChampionsTrophy } from "@/components/ui/champions-trophy";
import { PrizeCard } from "@/components/ui/prize-card";
import { useToast } from "@/hooks/use-toast";
import iphoneImage from "@assets/Imagem do WhatsApp de 2025-07-03 à(s) 18.04.27_7b07bfe2_1751579845431.jpg";

export default function Home() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showPix, setShowPix] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [prizeImage, setPrizeImage] = useState(iphoneImage);
  const [prizeImageError, setPrizeImageError] = useState(false);
  const { toast } = useToast();

  const pixCode = "00020126810014br.gov.bcb.pix013609dc3b10-e836-4412-a137-41dff474a70b0219Rifa Champions Fla27600016BR.COM.PAGSEGURO01366A005F18-7F32-4B45-810F-13FF13E07131520489995303986540515.005802BR5922Lucia Pereira da Silva6006Cuiaba62290525PAGS00000150025070316119163045D50";

  const validarCampos = () => {
    return (
      nome.trim() !== "" &&
      telefone.trim() !== "" &&
      telefone.match(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)
    );
  };

  const formatarTelefone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 11) {
      return digits.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
    }
    return value;
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatarTelefone(e.target.value);
    setTelefone(formatted);
  };

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
    setPaymentConfirmed(false);
  };

  useEffect(() => {
    if (validarCampos()) {
      setShowPix(true);
    } else {
      setShowPix(false);
      setPaymentConfirmed(false);
    }
  }, [nome, telefone]);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      toast({
        title: "Chave PIX copiada!",
        description: "A chave PIX foi copiada para sua área de transferência.",
      });
    } catch (error) {
      toast({
        title: "Chave PIX copiada!",
        description: "A chave PIX foi copiada com sucesso.",
      });
    }
  };

  const confirmarPagamento = () => {
    if (!validarCampos()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos corretamente antes de confirmar o pagamento.",
        variant: "destructive",
      });
      return;
    }
    setPaymentConfirmed(true);
  };

  const finalizarViaWhatsApp = () => {
    if (!validarCampos()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    const mensagem = encodeURIComponent(
      `Olá! Quero participar da Rifa Champions Fla 2025.\n\nNome: ${nome.trim()}\nTelefone: ${telefone.trim()}\n\nPagamento realizado via PIX!`
    );

    const numeroWhats = "5565992501914";
    const url = `https://wa.me/${numeroWhats}?text=${mensagem}`;
    window.open(url, "_blank");
  };

  const handlePrizeImageError = () => {
    setPrizeImageError(true);
  };

  return (
    <div className="min-h-screen champions-container text-white font-inter">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* Header Section */}
      <header className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          {/* Champions Trophy */}
          <ChampionsTrophy />

          {/* Main Title with Enhanced Styling */}
          <div className="relative mb-6">
            <h1 className="text-6xl md:text-8xl font-black text-gradient-gold mb-2 tracking-tight relative z-10 font-orbitron">
              RIFA
            </h1>
            <div className="text-4xl md:text-6xl font-bold text-white mb-4 relative z-10 font-exo">
              <span className="text-gradient-gold">CHAMPIONS</span> <span className="text-red-500">FLA</span>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4 font-orbitron tracking-widest">
              2025
            </div>
            
            {/* Enhanced Glowing Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-yellow-400/20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/10 via-transparent to-red-400/10 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Sparkle Effects */}
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-70" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8">
            Ajude-nos a realizar um sonho!
          </p>

          {/* Enhanced Decorative Elements */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                <i className="fas fa-star text-black text-sm"></i>
              </div>
              <div className="w-20 h-1 gradient-gold rounded-full"></div>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse">
              <i className="fas fa-trophy text-black text-lg"></i>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-20 h-1 gradient-gold rounded-full"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                <i className="fas fa-star text-black text-sm"></i>
              </div>
            </div>
          </div>

          {/* Champions League Badge */}
          <div className="mt-8 inline-block">
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-6 py-3 rounded-full border-2 border-yellow-400 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
                  <i className="fas fa-futbol text-black text-xs"></i>
                </div>
                <span className="text-yellow-400 font-bold text-sm tracking-wider">UEFA CHAMPIONS LEAGUE STYLE</span>
                <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
                  <i className="fas fa-futbol text-black text-xs"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-12">
        {/* Prize Information Cards */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            <span className="text-gradient-gold">Prêmios</span> Exclusivos
          </h2>

          <div className="grid md:grid-cols-3 gap-6 px-4">
            <PrizeCard
              icon={<i className="fas fa-trophy text-2xl text-black"></i>}
              title="1º LUGAR"
              description={
                <div>
                  <p className="font-semibold mb-2">iPhone 15 (128GB)</p>
                  <p className="text-gray-300">ou</p>
                  <p className="text-yellow-400 font-bold text-lg">R$ 3.000,00 no PIX</p>
                </div>
              }
              iconBg="bg-gradient-to-r from-yellow-400 to-yellow-600"
              titleColor="text-yellow-400"
            />

            <PrizeCard
              icon={<i className="fas fa-medal text-2xl text-white"></i>}
              title="2º LUGAR"
              description={<p className="text-yellow-400 font-bold text-lg">R$ 500,00 no PIX</p>}
              iconBg="bg-gradient-to-r from-gray-400 to-gray-600"
              titleColor="text-gray-300"
            />

            <PrizeCard
              icon={<i className="fas fa-award text-2xl text-white"></i>}
              title="3º LUGAR"
              description={<p className="text-yellow-400 font-bold text-lg">R$ 300,00 no PIX</p>}
              iconBg="bg-gradient-to-r from-orange-600 to-orange-800"
              titleColor="text-orange-400"
            />
          </div>
        </section>

        {/* Event Details */}
        <section className="mb-12">
          <Card className="glass-effect border-white/20 bg-transparent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient-gold mb-6 flex items-center">
                <i className="fas fa-info-circle mr-3"></i>
                Informações do Sorteio
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-ticket-alt text-yellow-400 mr-3"></i>
                    <div>
                      <span className="text-gray-300">Valor:</span>
                      <span className="text-white font-bold ml-2">R$ 15,00</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-calendar-alt text-yellow-400 mr-3"></i>
                    <div>
                      <span className="text-gray-300">Data do Sorteio:</span>
                      <span className="text-white font-bold ml-2">30/08/2025</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fab fa-instagram text-yellow-400 mr-3"></i>
                    <div>
                      <span className="text-gray-300">Transmissão:</span>
                      <span className="text-white font-bold ml-2">@escolaflamengocuiaba</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-yellow-400 mr-3"></i>
                    <div>
                      <span className="text-gray-300">Local:</span>
                      <span className="text-white font-bold ml-2">Rua Maurício Cardoso nº122, Cidade Alta - Cuiabá/MT</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Form */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gradient-gold mb-8">
              Participe Agora!
            </h3>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Form Section */}
              <div className="flex-1 glass-effect rounded-2xl p-8 w-full border-white/20">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); finalizarViaWhatsApp(); }}>
                  <div>
                    <Label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                      <i className="fas fa-user mr-2"></i>Nome Completo
                    </Label>
                    <Input
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={nome}
                      onChange={handleNomeChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <Label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                      <i className="fas fa-phone mr-2"></i>Número de Telefone
                    </Label>
                    <Input
                      type="tel"
                      placeholder="(65) 99999-9999"
                      value={telefone}
                      onChange={handleTelefoneChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>

                  {/* PIX Payment Section */}
                  {showPix && (
                    <div className="border-t border-white/20 pt-6">
                      <h4 className="text-lg font-semibold text-gradient-gold mb-4 flex items-center">
                        <i className="fas fa-qrcode mr-2"></i>Pagamento via PIX
                      </h4>

                      <div className="text-center mb-4">
                        <div className="inline-block p-4 bg-white rounded-lg">
                          <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${pixCode}`}
                            alt="QR Code PIX"
                            className="w-48 h-48 mx-auto"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <span className="text-sm text-gray-300 truncate flex-1 min-w-0">
                            {pixCode}
                          </span>
                          <Button
                            type="button"
                            onClick={copiarPix}
                            className="gradient-gold text-black hover:opacity-90 flex-shrink-0"
                          >
                            <i className="fas fa-copy mr-1"></i>Copiar
                          </Button>
                        </div>
                       <div>
                         <Button
                           type="button"
                           onClick={confirmarPagamento}
                           disabled={paymentConfirmed}
                           className={`w-full py-3 font-semibold transition-all duration-300 mb-4 ${
                             paymentConfirmed
                             ? "bg-green-600 hover:bg-green-600"
                             : "gradient-red hover:opacity-90"
                           }`}
                           >
                           <i className={`fas ${paymentConfirmed ? "fa-check-circle" : "fa-check"} mr-2`}></i>
                           {paymentConfirmed ? "Pagamento Confirmado!" : "Já realizei o pagamento"}
                         </Button>
                         
                         {paymentConfirmed && (
                      <div className="p-4 text-sm rounded border border-green-600 bg-green-100 text-green-800">
                        <strong>⚠️Atenção:</strong> O pedido será registrado somente após a confirmação do pagamento via PIX.
                        Por favor, envie o comprovante para garantir a validação do seu pedido.
                      </div>
                    )}
                       </div>
                  )}

                  <Button
                    type="submit"
                    disabled={!paymentConfirmed}
                    className="w-full gradient-gold text-black py-4 font-bold text-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>Finalizar via WhatsApp
                  </Button>
                </form>
              </div>

              {/* Prize Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  {!prizeImageError ? (
                    <img
                      src={prizeImage}
                      alt="iPhone 15 - Prêmio Principal"
                      className="w-64 h-80 object-cover rounded-2xl shadow-2xl animate-float"
                      onError={handlePrizeImageError}
                    />
                  ) : (
                    <div className="w-64 h-80 bg-gradient-gold rounded-2xl shadow-2xl animate-float flex items-center justify-center">
                      <i className="fas fa-mobile-alt text-6xl text-black"></i>
                    </div>
                  )}
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-transparent rounded-2xl opacity-30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="text-center">
          <Card className="glass-effect border-white/20 bg-transparent max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-gradient-gold mb-4">
                <i className="fas fa-shield-alt mr-2"></i>Confiança e Segurança
              </h4>
              <p className="text-gray-300 mb-4">
                Sorteio realizado de forma transparente e ao vivo no Instagram oficial da Escola Flamengo Cuiabá
              </p>
              <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
                <div className="flex items-center">
                  <i className="fas fa-certificate text-yellow-400 mr-2"></i>
                  <span className="text-sm text-gray-300">Licenciado</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-eye text-yellow-400 mr-2"></i>
                  <span className="text-sm text-gray-300">Transparente</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-handshake text-yellow-400 mr-2"></i>
                  <span className="text-sm text-gray-300">Confiável</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 text-center text-gray-400">
        <p>&copy; 2025 Escola Flamengo Cuiabá. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
