import "bootstrap";

import { loadDynamicBannerText } from '../components/banner';

import {toggleOpen } from '../components/cards';

import { debounce } from '../components/images';
import { checkSlide } from '../components/images';


loadDynamicBannerText();

toggleOpen();

// img on slide
debounce();
checkSlide();
