import { PlusOutlined } from '@ant-design/icons';
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
import { ApproveModal, CreateCategoryModal } from 'components/modals';

SwiperCore.use([Grid, Pagination, Navigation]);

const Categories: React.FC = () => {
  const [approveVisible, setApproveVisible] = React.useState(false);
  const [addCategoryVisible, setAddCategoryVisible] = React.useState(false);

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
          {Array(16)
            .fill(null)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <InnerSlide color="pink">
                  <Text onClick={() => setApproveVisible(true)}>
                    овщыdsfdsыыаыв
                  </Text>
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
        open={approveVisible}
        onCancel={() => setApproveVisible(false)}
      />
      <CreateCategoryModal
        open={addCategoryVisible}
        onCancel={() => setAddCategoryVisible(false)}
      />
    </>
  );
};

export default Categories;
