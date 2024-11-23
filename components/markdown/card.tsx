import React, { ReactNode } from "react";
import * as Icons from "lucide-react"; // Mengimpor semua ikon Lucide

// Props untuk Card utama
interface CardProps {
  children: ReactNode;
}

// Props untuk CardTitle
interface CardTitleProps {
  title: string;
  icon?: string; // Properti ikon berupa nama string
}

// Props untuk CardDescription
interface CardDescriptionProps {
  description: string;
}

// Komponen Card Utama
export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden py-4 px-8">
      {children}
    </div>
  );
};

// Komponen Card Title
Card.Title = ({ title, icon }: CardTitleProps) => {
  const Icon = icon ? Icons[icon] : null; // Mencari ikon berdasarkan nama string

  return (
    <div className="flex flex-col space-y-1">
      {Icon && <Icon className="text-xl text-primary" />} {/* Render ikon jika ada */}
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

// Komponen Card Description
Card.Description = ({ description }: CardDescriptionProps) => (
  <p className="text-gray-700 mt-2">{description}</p>
);

export default Card;
