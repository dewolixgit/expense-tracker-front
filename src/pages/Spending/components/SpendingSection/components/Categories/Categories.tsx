import * as React from 'react';
import SwiperCore, { Grid, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  BETWEEN_SLIDES_PX,
  Container,
  InnerSlide,
  Text,
} from './Categories.styles';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

SwiperCore.use([Grid, Pagination]);

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
    </Container>
  );
};

export default Categories;
