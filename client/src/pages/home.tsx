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

  const formatarTelefone = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 11) {
      return digits.replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
    }
    return value;
  };

  const handleTelefoneChange = (e) => {
    const formatted = formatarTelefone(e.target.value);
    setTelefone(formatted);
  };

  const handleNomeChange = (e) => {
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
        title: "Erro ao copiar PIX",
        description: "Não foi possível copiar a chave PIX automaticamente.",
        variant: "destructive",
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
    toast({
      title: "Pagamento marcado como confirmado!",
      description: "Agora finalize sua inscrição pelo WhatsApp.",
    });
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
    if (!paymentConfirmed) {
      toast({
        title: "Confirmação necessária",
        description: "Você precisa marcar o pagamento como confirmado antes de prosseguir.",
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

  // O restante do JSX com layout e estilos permanece como você já fez
  return (
    <div> {/* Aqui vai seu layout completo, mantido como está */} </div>
  );
}
