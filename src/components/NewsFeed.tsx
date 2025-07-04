import React, { useEffect, useRef, useState } from 'react';
import fetchArticles from '@/services/fetchArticles.ts';
import { Col, Row } from 'antd';
import NewsCard from '@/components/NewsCard.tsx';
import Loader from '@/utils/Loader.tsx';
import { toast } from 'react-toastify';
import type { Article } from '@/types/common.ts';

type NewsFeedProps = {
  filters: { [key: string]: string };
  searchTerm: string;
}

const NewsFeed: React.FC<NewsFeedProps> = ({ filters, searchTerm }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      setLoading(true);
      fetchArticles({ source: 'foxnews.com' }, '').then((res) => {
        if (res) {
          setArticles(res?.data?.articles);
          setLoading(false);
        }
      }).catch((err) => {
        setLoading(false);
        toast.error(err?.response?.data?.message);
      });
    } else {
      if (searchTerm || Object.keys(filters).length) {
        setLoading(true);
        fetchArticles(filters, searchTerm).then((res) => {
          if (res) {
            setArticles(res?.data?.articles);
            setLoading(false);
          }
        }).catch((err) => {
          setLoading(false);
          toast.error(err?.response?.data?.message);
        });
      }
    }
  }, [filters, searchTerm]);

  return (
    loading ? <Loader/> :
      <>
        <Row gutter={[16, 16]} style={{ margin: '50px 20px 0px 20px' }}>
          {
            articles?.map((article) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={article?.url}>
                <NewsCard article={article}/>
              </Col>
            ))
          }
        </Row>
      </>
  );
};

export default NewsFeed;