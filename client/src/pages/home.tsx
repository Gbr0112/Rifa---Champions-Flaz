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

  const rawPixCode = "00020126810014br.gov.bcb.pix013609dc3b10-e836-4412-a137-41dff474a70b0219Rifa Champions Fla27600016BR.COM.PAGSEGURO01366A005F18-7F32-4B45-810F-13FF13E07131520489995303986540515.005802BR5922Lucia Pereira da Silva6006Cuiaba62290525PAGS00000150025070316119163045D50";

  const pixCodeEncoded = encodeURIComponent(rawPixCode);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(rawPixCode);
      toast({
        title: "Chave PIX copiada!",
        description: "A chave PIX foi copiada para sua área de transferência.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar a chave PIX.",
        variant: "destructive",
      });
    }
  };

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
      {/* ...restante do código permanece igual até a parte abaixo... */}

      {/* PIX Payment Section */}
      {showPix && (
        <div className="border-t border-white/20 pt-6">
          <h4 className="text-lg font-semibold text-gradient-gold mb-4 flex items-center">
            <i className="fas fa-qrcode mr-2"></i>Pagamento via PIX
          </h4>

          <div className="text-center mb-4">
            <div className="inline-block p-4 bg-white rounded-lg">
              <img
                const pixCodeEncoded = encodeURIComponent(rawPixCode);
                alt="QR Code PIX"
                className="w-48 h-48 mx-auto"
              />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-sm text-gray-300 truncate flex-1 min-w-0">
                {rawPixCode}
              </span>
              <Button
                type="button"
                onClick={copiarPix}
                className="gradient-gold text-black hover:opacity-90 flex-shrink-0"
              >
                <i className="fas fa-copy mr-1"></i>Copiar
              </Button>
            </div>
          </div>

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
        </div>
      )}

      {/* ...continuação do restante do código como estava... */}
    </div>
  );
}
