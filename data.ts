import { Product, Reseller, GalleryItem, Testimonial } from './types';

// Updated Subwoofer image based on user request (Carbon Fiber Cone)
const ROSSNER_SUB_COVER_URL = "https://i.ibb.co/8g28xSgf/Whats-App-Image-2025-12-10-at-10-23-50-1.jpg"; 
// Updated Mid-Bass image based on user request (Mid Bass Speaker)
const ROSSNER_MID_BASS_URL = "https://i.ibb.co/SwWMMMDr/Whats-App-Image-2025-12-10-at-10-48-51.jpg";
// New Subwoofer 1350W Image
const ROSSNER_SUB_1350_URL = "https://i.ibb.co/3y997YWx/Whats-App-Image-2025-12-10-at-11-00-43.jpg";
// New Subwoofer 8" 550W Image
const ROSSNER_SUB_8_URL = "https://i.ibb.co/gZVwP3BX/Whats-App-Image-2025-12-10-at-11-08-15.jpg";

export const products: Product[] = [
  {
    id: 'sub-12-1500',
    name: 'Rossner Audio 12" 1500W RMS',
    category: 'Subwoofer',
    size: '12 Polegadas',
    powerRMS: 1500,
    impedance: '2+2 Ohms',
    description: 'Projetado para competições de SPL. Bobina de alta temperatura e cone reforçado com fibra de carbono para máxima rigidez. O verdadeiro DNA Rossner.',
    imageUrl: ROSSNER_SUB_COVER_URL,
    isNew: true,
    specs: {
      fs: '32 Hz',
      qts: '0.45',
      vas: '45 L',
      spl: '89 dB',
      xmax: '18mm'
    }
  },
  {
    id: 'sub-15-3000',
    name: 'Rossner Audio 15" 3000W RMS',
    category: 'Subwoofer',
    size: '15 Polegadas',
    powerRMS: 3000,
    impedance: '1+1 Ohms',
    description: 'O peso pesado da família. Graves profundos e violentos para quem busca destruir nas medições com a qualidade Rossner.',
    imageUrl: ROSSNER_SUB_COVER_URL,
    specs: {
      fs: '28 Hz',
      qts: '0.50',
      vas: '82 L',
      spl: '91 dB',
      xmax: '25mm'
    }
  },
  {
    id: 'sub-12-1350',
    name: 'Rossner Audio 12" 1350W RMS',
    category: 'Subwoofer',
    size: '12 Polegadas',
    powerRMS: 1350,
    impedance: '2+2 / 4+4 Ohms',
    description: 'A nova referência em versatilidade. Com 1350W RMS, oferece graves macios e profundos, disponível em configurações de bobina dupla.',
    imageUrl: ROSSNER_SUB_1350_URL,
    isNew: true,
    specs: {
      fs: '33 Hz',
      qts: '0.48',
      vas: '40 L',
      spl: '88 dB',
      xmax: '15mm'
    }
  },
  {
    id: 'sub-8-550',
    name: 'Rossner Audio 8" 550W RMS',
    category: 'Subwoofer',
    size: '8 Polegadas',
    powerRMS: 550,
    impedance: '4 Ohms',
    description: 'Pequeno no tamanho, gigante no desempenho. Com 550W RMS, este subwoofer de 8 polegadas entrega graves surpreendentes para seu tamanho.',
    imageUrl: ROSSNER_SUB_8_URL,
    isNew: true,
    specs: {
      fs: '38 Hz',
      qts: '0.52',
      vas: '18 L',
      spl: '87 dB',
      xmax: '12mm'
    }
  },
  {
    id: 'mid-8-pro',
    name: 'Rossner Mid-Bass 8" 400W RMS',
    category: 'Mid-Bass',
    size: '8 Polegadas',
    powerRMS: 400,
    impedance: '4 Ohms / 8 Ohms',
    description: 'Médio grave com voz natural e ataque preciso. Ideal para sistemas de trio elétrico de alta fidelidade.',
    imageUrl: ROSSNER_MID_BASS_URL,
    specs: {
      fs: '90 Hz',
      qts: '0.65',
      vas: '12 L',
      spl: '96 dB',
      xmax: '4mm'
    }
  },
  {
    id: 'mid-6-future',
    name: 'Rossner Mid-Bass 6" 250W RMS',
    category: 'Mid-Bass',
    size: '6 Polegadas',
    powerRMS: 250,
    impedance: '4 Ohms',
    description: 'Em breve! O novo médio de 6 polegadas Rossner para portas e sistemas compactos.',
    imageUrl: ROSSNER_MID_BASS_URL,
    isComingSoon: true,
    specs: {
      fs: 'TBA',
      qts: 'TBA',
      vas: 'TBA',
      spl: 'TBA',
      xmax: 'TBA'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendes',
    role: 'Competidor MTM',
    content: 'Já usei várias marcas, mas o Sub de 1500W da Rossner me surpreendeu. O controle de cone é absurdo e não cheira bobina nem no talo.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 't2',
    name: 'Loja SoundCar',
    role: 'Parceiro Instalador',
    content: 'Meus clientes só pedem Rossner agora. A qualidade de construção facilita muito a instalação e o acerto da caixa.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 't3',
    name: 'Felipe Santos',
    role: 'Projeto Residencial',
    content: 'Montei uma caixa Bob com os médios de 8" e o sub de 12". A definição do som ficou cristalina e o grave muito macio.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/11.jpg'
  }
];

export const resellers: Reseller[] = [
  // Norte
  { id: 'AC1', name: 'Acre Sound', city: 'Rio Branco', state: 'AC', phone: '(68) 3222-1111', address: 'Av. Ceará, 500', whatsapp: '5568999991111' },
  { id: 'AC2', name: 'Rio Branco Audio', city: 'Rio Branco', state: 'AC', phone: '(68) 3222-2222', address: 'Rua do Comércio, 120' },
  { id: 'AM1', name: 'Manaus Equipadora', city: 'Manaus', state: 'AM', phone: '(92) 3666-0001', address: 'Av. Djalma Batista, 200', whatsapp: '5592999990001' },
  { id: 'AM2', name: 'Amazonas Bass', city: 'Manaus', state: 'AM', phone: '(92) 3666-0002', address: 'Rua Recife, 10' },
  { id: 'AP1', name: 'Macapá Som', city: 'Macapá', state: 'AP', phone: '(96) 3222-3333', address: 'Rua São José, 45' },
  { id: 'AP2', name: 'Equipadora Norte', city: 'Macapá', state: 'AP', phone: '(96) 3222-4444', address: 'Av. FAB, 100', whatsapp: '5596999994444' },
  { id: 'PA1', name: 'Belém Audio Car', city: 'Belém', state: 'PA', phone: '(91) 3222-5555', address: 'Av. Nazaré, 800' },
  { id: 'PA2', name: 'Pará Potência', city: 'Santarém', state: 'PA', phone: '(93) 3555-6666', address: 'Av. Tapajós, 300' },
  { id: 'RO1', name: 'Porto Velho Som', city: 'Porto Velho', state: 'RO', phone: '(69) 3222-7777', address: 'Av. Sete de Setembro, 1500' },
  { id: 'RO2', name: 'Rondônia Bass', city: 'Ji-Paraná', state: 'RO', phone: '(69) 3444-8888', address: 'Av. Brasil, 500' },
  { id: 'RR1', name: 'Boa Vista Audio', city: 'Boa Vista', state: 'RR', phone: '(95) 3666-9999', address: 'Av. Jaime Brasil, 200' },
  { id: 'RR2', name: 'Roraima Som', city: 'Boa Vista', state: 'RR', phone: '(95) 3666-1010', address: 'Av. Ville Roy, 400' },
  { id: 'TO1', name: 'Palmas Equipadora', city: 'Palmas', state: 'TO', phone: '(63) 3222-1111', address: 'Quadra 104 Sul, Av. JK', whatsapp: '5563999991111' },
  { id: 'TO2', name: 'Tocantins Sound', city: 'Araguaína', state: 'TO', phone: '(63) 3444-2222', address: 'Av. Cônego João Lima, 800' },

  // Nordeste
  { id: 'AL1', name: 'Maceió Bass', city: 'Maceió', state: 'AL', phone: '(82) 3333-4444', address: 'Av. Fernandes Lima, 2000' },
  { id: 'AL2', name: 'Alagoas Som', city: 'Arapiraca', state: 'AL', phone: '(82) 3555-6666', address: 'Rua do Comércio, 50' },
  { id: 'BA1', name: 'Salvador Audio Prime', city: 'Salvador', state: 'BA', phone: '(71) 3333-7777', address: 'Av. ACM, 1200', whatsapp: '5571999997777' },
  { id: 'BA2', name: 'Bahia Sound', city: 'Feira de Santana', state: 'BA', phone: '(75) 3666-8888', address: 'Av. Maria Quitéria, 500' },
  { id: 'CE1', name: 'Fortaleza Power', city: 'Fortaleza', state: 'CE', phone: '(85) 3222-9999', address: 'Av. Bezerra de Menezes, 100', whatsapp: '5585999999999' },
  { id: 'CE2', name: 'Ceará Equipadora', city: 'Sobral', state: 'CE', phone: '(88) 3666-0000', address: 'Av. Dom José, 300' },
  { id: 'MA1', name: 'São Luís Som', city: 'São Luís', state: 'MA', phone: '(98) 3222-1111', address: 'Av. dos Holandeses, 50' },
  { id: 'MA2', name: 'Maranhão Bass', city: 'Imperatriz', state: 'MA', phone: '(99) 3555-2222', address: 'Av. Bernardo Sayão, 800' },
  { id: 'PB1', name: 'João Pessoa Audio', city: 'João Pessoa', state: 'PB', phone: '(83) 3222-3333', address: 'Av. Epitácio Pessoa, 1500' },
  { id: 'PB2', name: 'Paraíba Sound', city: 'Campina Grande', state: 'PB', phone: '(83) 3333-4444', address: 'Rua Maciel Pinheiro, 200' },
  { id: 'PE1', name: 'Recife Tuning', city: 'Recife', state: 'PE', phone: '(81) 3444-5555', address: 'Av. Caxangá, 2000', whatsapp: '5581999995555' },
  { id: 'PE2', name: 'Pernambuco Bass', city: 'Caruaru', state: 'PE', phone: '(81) 3777-6666', address: 'Av. Agamenon Magalhães, 500' },
  { id: 'PI1', name: 'Teresina Som', city: 'Teresina', state: 'PI', phone: '(86) 3222-7777', address: 'Av. Frei Serafim, 1000' },
  { id: 'PI2', name: 'Piauí Equipadora', city: 'Parnaíba', state: 'PI', phone: '(86) 3333-8888', address: 'Av. São Sebastião, 400' },
  { id: 'RN1', name: 'Natal Audio Car', city: 'Natal', state: 'RN', phone: '(84) 3222-9999', address: 'Av. Salgado Filho, 1200' },
  { id: 'RN2', name: 'Potiguar Som', city: 'Mossoró', state: 'RN', phone: '(84) 3333-0000', address: 'Av. Presidente Dutra, 500' },
  { id: 'SE1', name: 'Aracaju Bass', city: 'Aracaju', state: 'SE', phone: '(79) 3222-1111', address: 'Av. Hermes Fontes, 800' },
  { id: 'SE2', name: 'Sergipe Sound', city: 'Itabaiana', state: 'SE', phone: '(79) 3444-2222', address: 'Av. Dr. Luiz Magalhães, 300' },

  // Centro-Oeste
  { id: 'DF1', name: 'Brasília Sound', city: 'Brasília', state: 'DF', phone: '(61) 3333-4444', address: 'SIA Trecho 3, Lote 50', whatsapp: '5561999994444' },
  { id: 'DF2', name: 'Capital Audio', city: 'Taguatinga', state: 'DF', phone: '(61) 3555-6666', address: 'Av. Comercial Sul, 200' },
  { id: 'GO1', name: 'Goiânia Sound', city: 'Goiânia', state: 'GO', phone: '(62) 96666-3333', address: 'Setor Bueno, Qd 4', whatsapp: '5562999993333' },
  { id: 'GO2', name: 'Goiás Bass', city: 'Anápolis', state: 'GO', phone: '(62) 3333-8888', address: 'Av. Brasil, 1500' },
  { id: 'MT1', name: 'Cuiabá Equipadora', city: 'Cuiabá', state: 'MT', phone: '(65) 3666-1111', address: 'Av. Fernando Corrêa, 2000' },
  { id: 'MT2', name: 'Mato Grosso Som', city: 'Várzea Grande', state: 'MT', phone: '(65) 3688-2222', address: 'Av. Couto Magalhães, 500' },
  { id: 'MS1', name: 'Campo Grande Audio', city: 'Campo Grande', state: 'MS', phone: '(67) 3333-4444', address: 'Av. Afonso Pena, 1000' },
  { id: 'MS2', name: 'Dourados Bass', city: 'Dourados', state: 'MS', phone: '(67) 3444-5555', address: 'Av. Marcelino Pires, 800' },

  // Sudeste
  { id: 'ES1', name: 'Vitória Som', city: 'Vitória', state: 'ES', phone: '(27) 3222-6666', address: 'Av. Vitória, 500' },
  { id: 'ES2', name: 'Capixaba Audio', city: 'Vila Velha', state: 'ES', phone: '(27) 3333-7777', address: 'Av. Champagnat, 100' },
  { id: 'MG1', name: 'Minas Audio', city: 'Belo Horizonte', state: 'MG', phone: '(31) 95555-4444', address: 'Av. Amazonas, 1000', whatsapp: '5531955554444' },
  { id: 'MG2', name: 'Uai Som', city: 'Uberlândia', state: 'MG', phone: '(34) 3222-8888', address: 'Av. Rondon Pacheco, 500' },
  { id: 'RJ1', name: 'Mega Hertz', city: 'Rio de Janeiro', state: 'RJ', phone: '(21) 97777-2222', address: 'Rua da Praia, 88', whatsapp: '5521977772222' },
  { id: 'RJ2', name: 'Carioca Bass', city: 'Niterói', state: 'RJ', phone: '(21) 2620-3333', address: 'Rua Gavião Peixoto, 100' },
  { id: 'SP1', name: 'Audio Storm', city: 'São Paulo', state: 'SP', phone: '(11) 99999-0000', address: 'Rua do Som, 123 - Centro', whatsapp: '5511999990000' },
  { id: 'SP2', name: 'Bass Club', city: 'Campinas', state: 'SP', phone: '(19) 98888-1111', address: 'Av. Brasil, 450 - Norte', whatsapp: '5519988881111' },
  { id: 'SP3', name: 'Pancadão Sound', city: 'Ribeirão Preto', state: 'SP', phone: '(16) 3666-7777', address: 'Av. Saudade, 1200' },

  // Sul
  { id: 'PR1', name: 'Curitiba Sound', city: 'Curitiba', state: 'PR', phone: '(41) 3222-4444', address: 'Av. Batel, 1500', whatsapp: '5541999994444' },
  { id: 'PR2', name: 'Paraná Bass', city: 'Londrina', state: 'PR', phone: '(43) 3333-5555', address: 'Av. Higienópolis, 800' },
  { id: 'RS1', name: 'Sul Bass', city: 'Porto Alegre', state: 'RS', phone: '(51) 94444-5555', address: 'Av. Ipiranga, 500', whatsapp: '5551944445555' },
  { id: 'RS2', name: 'Gaúcho Equipadora', city: 'Caxias do Sul', state: 'RS', phone: '(54) 3222-6666', address: 'Rua Sinimbu, 1000' },
  { id: 'SC1', name: 'Floripa Audio', city: 'Florianópolis', state: 'SC', phone: '(48) 3222-7777', address: 'Av. Beira Mar Norte, 200', whatsapp: '5548999997777' },
  { id: 'SC2', name: 'Catarina Sound', city: 'Joinville', state: 'SC', phone: '(47) 3444-8888', address: 'Rua João Colin, 500' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g5',
    title: 'Campeão Ranking Puro Bass',
    type: 'Championship',
    description: '1° lugar no ranking com 157.8 dB em 34Hz.',
    imageUrl: 'https://i.ibb.co/Gv6rQZmk/Whats-App-Image-2025-12-10-at-11-33-28.jpg'
  },
  {
    id: 'g1',
    title: 'Projeto Saveiro MTM',
    type: 'Project',
    description: '1º Lugar Categoria Intermediária - 152.4dB',
    imageUrl: 'https://i.ibb.co/kgyZq0Vj/Whats-App-Image-2025-12-10-at-11-27-52.jpg'
  },
  {
    id: 'g2',
    title: 'Paredão Saveiro G5',
    type: 'Project',
    description: 'Projeto insano utilizando 8x Subwoofers Rossner Audio.',
    imageUrl: 'https://i.ibb.co/c9FtXfT/Whats-App-Image-2025-12-10-at-11-27-52-1.jpg'
  },
  {
    id: 'g3',
    title: 'Paredão Recordista',
    type: 'Project',
    description: 'Recorde quebrado na etapa de Curitiba com Rossner Audio.',
    imageUrl: 'https://i.ibb.co/gM7S4nPy/Whats-App-Image-2025-12-10-at-11-27-52-2.jpg'
  },
  {
    id: 'g4',
    title: 'Caixa Bob Residencial',
    type: 'Project',
    description: 'Acabamento em acrílico e LED com a qualidade Rossner Audio.',
    imageUrl: 'https://i.ibb.co/B29rc1qv/Whats-App-Image-2025-12-10-at-11-27-52-3.jpg'
  },
  {
    id: 'g6',
    title: 'Projeto Paredão SPL',
    type: 'Project',
    description: 'Configuração robusta para competições e dia a dia.',
    imageUrl: 'https://i.ibb.co/1YcX7nwj/Whats-App-Image-2025-12-10-at-12-29-23.jpg'
  },
  {
    id: 'g7',
    title: 'Caixa Trio Personalizada',
    type: 'Project',
    description: 'O equilíbrio perfeito entre graves e médios Rossner.',
    imageUrl: 'https://i.ibb.co/DH0gGBSW/Whats-App-Image-2025-12-10-at-12-29-23-1.jpg'
  }
];