import React from 'react';
import { Card, Typography } from 'antd';
import daysjs from 'dayjs';

const { Paragraph } = Typography;

type NewsCardProps = {
  article: { [key: string]: string };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const readMore = () => {
    window.open(article?.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card title={article?.title}
          cover={
            <img alt="Article Image"
                 src={article?.urlToImage || 'https://placehold.co/600x400/png?text=Article%20Image'}
                 style={{
                   height: '150px',
                   objectFit: 'cover',
                   width: '100%',
                 }}/>
          }
          style={{
            boxShadow: '0px 4px 8px 2px rgba(0, 0, 0, 0.2)',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            cursor: 'pointer',
          }}
          onClick={readMore}
    >
      <div style={{ flexGrow: 1 }}>
        <Paragraph ellipsis={{ expandable: false, rows: 3 }}>
          {article?.description}
        </Paragraph>
      </div>
      <div>
        <p><strong>Source:</strong> {article?.source?.name}</p>
        <p><strong>Date:</strong> {daysjs(article?.publishedAt).format('DD/MM/YYYY')}</p>
      </div>
    </Card>
  );
};

export default NewsCard;