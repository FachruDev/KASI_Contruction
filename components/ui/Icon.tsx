import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  BarricadeIcon,
  BuildingsIcon,
  ClockIcon,
  FactoryIcon,
  GaugeIcon,
  HandshakeIcon,
  HardHatIcon,
  HeadsetIcon,
  HouseIcon,
  LeafIcon,
  MapPinIcon,
  MoneyIcon,
  PathIcon,
  ReceiptIcon,
  SealCheckIcon,
  ShieldCheckIcon,
  StackIcon,
  StarIcon,
  ThumbsUpIcon,
  TruckIcon,
  WrenchIcon,
} from "@phosphor-icons/react/ssr";

/** CMS records store Material Symbol names; map the common ones onto the light Phosphor set. */
const ICONS: Record<string, PhosphorIcon> = {
  engineering: HardHatIcon,
  construction: BarricadeIcon,
  layers: StackIcon,
  request_quote: ReceiptIcon,
  payments: MoneyIcon,
  verified: SealCheckIcon,
  workspace_premium: SealCheckIcon,
  shield: ShieldCheckIcon,
  security: ShieldCheckIcon,
  schedule: ClockIcon,
  timer: ClockIcon,
  speed: GaugeIcon,
  local_shipping: TruckIcon,
  handshake: HandshakeIcon,
  support_agent: HeadsetIcon,
  star: StarIcon,
  thumb_up: ThumbsUpIcon,
  eco: LeafIcon,
  location_on: MapPinIcon,
  road: PathIcon,
  add_road: PathIcon,
  home: HouseIcon,
  apartment: BuildingsIcon,
  factory: FactoryIcon,
  build: WrenchIcon,
  handyman: WrenchIcon,
};

export function Icon({ name, size = 28, className }: { name: string; size?: number; className?: string }) {
  const Component = ICONS[name] ?? SealCheckIcon;
  return <Component aria-hidden="true" className={className} size={size} weight="light" />;
}
