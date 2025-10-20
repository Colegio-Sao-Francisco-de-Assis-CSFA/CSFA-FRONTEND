import { Swiper as SwiperCore, SwiperOptions } from 'swiper/types';

export interface ReusableCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSwiperInit?: (swiper: SwiperCore) => void;
  swiperOptions?: SwiperOptions;
  className?: string;
  swiperClassName?: string;
}

export type ItemWithId = {
  id: string | number;
};
