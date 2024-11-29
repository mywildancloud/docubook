import React from 'react';
import { Settings } from '@/setting';
import { SquarePenIcon } from 'lucide-react';
interface EditThisPageProps {
  filePath: string;
}

const EditThisPage: React.FC<EditThisPageProps> = ({ filePath }) => {
  const repoUrl = Settings.github;
  const editUrl = `${repoUrl}/blob/main/${filePath}`;

  return (
    <div style={{ textAlign: 'right' }}>
      <a
        href={editUrl}
        target='_blank'
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        <span className='text-primary text-sm'>Edit this page on Github</span>
        <SquarePenIcon className="w-4 h-4 text-primary" />
      </a>
    </div>
  );
};

export default EditThisPage;
