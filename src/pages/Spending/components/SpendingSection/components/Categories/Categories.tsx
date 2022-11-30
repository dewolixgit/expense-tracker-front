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

SwiperCore.use([Grid, Pagination, Navigation]);

const Categories: React.FC = () => {
  return (
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
                <Text>овщыdsfdsыыаыв</Text>
              </InnerSlide>
            </SwiperSlide>
          ))}
      </Swiper>
      <StyledButton icon={<PlusOutlined />} />
    </Container>
  );
};

export default Categories;
