import React, { ReactNode } from "react";
import * as Icons from "lucide-react";

type IconName = keyof typeof Icons;

// Props untuk Card utama
interface CardProps {
  children: ReactNode;
}

// Props untuk CardTitle
interface CardTitleProps {
  title: string;
  icon?: IconName; // Properti ikon berupa nama ikon yang valid
}

// Props untuk CardDescription
interface CardDescriptionProps {
  description: string;
}

// Komponen Card Utama
const Card: React.FC<CardProps> & {
  Title: React.FC<CardTitleProps>;
  Description: React.FC<CardDescriptionProps>;
} = ({ children }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden py-4 px-8">
      {children}
    </div>
  );
};

// Komponen Card Title
Card.Title = ({ title, icon }: CardTitleProps) => {
  const Icon = icon ? (Icons[icon] as React.FC<{ className?: string }>) : null; // Tipe eksplisit sebagai React.FC

  return (
    <div className="flex flex-col space-y-1">
      {Icon && <Icon className="text-xl text-primary" />} {/* Render ikon jika ada */}
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

// Menambahkan displayName untuk Card.Title
Card.Title.displayName = "CardTitle";

// Komponen Card Description
Card.Description = ({ description }: CardDescriptionProps) => (
  <p className="text-muted-foreground text-[16.5px] mt-2">{description}</p>
);

// Menambahkan displayName untuk Card.Description
Card.Description.displayName = "CardDescription";

export default Card;
