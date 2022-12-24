import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Row } from 'antd';
import { useEvent, useStore } from 'effector-react';
import * as React from 'react';
import SwiperCore, { Grid, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  BETWEEN_SLIDES_PX,
  Container,
  InnerSlide,
  StyledButton,
  Text,
} from './Categories.styles';

import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { ApproveModal, CategoryModal } from 'components/modals';
import { $categories, deleteCategory } from 'models/categories';
import { CategoryType } from 'models/categories/types';

SwiperCore.use([Grid, Pagination, Navigation]);

const Categories: React.FC = () => {
  const [addCategoryVisible, setAddCategoryVisible] = React.useState(false);
  const [categoryToEdit, setCategoryToEdit] =
    React.useState<CategoryType | null>(null);
  const [categoryToDelete, setCategoryToDelete] = React.useState<
    CategoryType['id'] | null
  >(null);

  const deleteCategoryEvent = useEvent(deleteCategory);
  const categories = useStore($categories);

  return (
    <>
      <Container>
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 3,
          }}
          spaceBetween={BETWEEN_SLIDES_PX}
          pagination={{
            clickable: true,
          }}
          navigation
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <InnerSlide color={category.color}>
                <Row>
                  <Button
                    disabled={!!categoryToDelete}
                    icon={<DeleteOutlined />}
                    onClick={() => setCategoryToDelete(category.id)}
                  />
                  <Button
                    disabled={!!categoryToEdit}
                    icon={
                      <EditOutlined
                        onClick={() => setCategoryToEdit(category)}
                      />
                    }
                  />
                </Row>
                <Text>{category.name}</Text>
              </InnerSlide>
            </SwiperSlide>
          ))}
        </Swiper>
        <StyledButton
          icon={<PlusOutlined />}
          onClick={() => setAddCategoryVisible(true)}
        />
      </Container>
      <ApproveModal
        open={categoryToDelete !== null}
        onCancel={() => setCategoryToDelete(null)}
        onOk={() => {
          if (categoryToDelete) {
            deleteCategoryEvent(categoryToDelete);
            setCategoryToDelete(null);
          }
        }}
      />
      <CategoryModal
        editing={false}
        open={addCategoryVisible}
        onCancel={() => setAddCategoryVisible(false)}
      />
      {categoryToEdit && (
        <CategoryModal
          editing={true}
          category={categoryToEdit}
          open={!!categoryToEdit}
          onCancel={() => setCategoryToEdit(null)}
        />
      )}
    </>
  );
};

export default Categories;
