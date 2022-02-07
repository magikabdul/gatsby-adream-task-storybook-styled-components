import styled from 'styled-components';

export const BoxDesktopLarge = styled.div`
  height: 941px;
  position: relative;
`;

export const SliderDesktopLarge = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBoxDesktopLarge = styled.div`
  position: absolute;
  z-index: -1;
  width: calc(3 * 1920px);
  height: 100%;
  display: flex;
  transform: ${({ imageNumber }) => `translateX(${-1920 * imageNumber}px)`};
  transition: transform 0.5s ease-in-out;
`;

export const ContactFormBoxDesktopLarge = styled.div`
  position: absolute;
  top: 178px;
  left: 1295px;
`;

export const DescriptionBoxDesktopLarge = styled.div`
  position: absolute;
  top: 515px;
  left: 175px;
  color: ${({ theme }) => theme.color.white};
`;

export const ControlBoxDesktopLarge = styled.div`
  position: absolute;
  bottom: 0;
  height: 118px;
  width: 100%;
  display: flex;
`;

export const NaviLeftDesktopLarge = styled.div`
  width: 160px;
  height: 100%;
`;

export const NaviRightDesktopLarge = styled.div`
  width: 145px;
  height: 100%;
`;

export const PaginationBoxDesktopLarge = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

// PHONE
export const BoxPhone = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
`;

export const DescriptionBoxPhone = styled.div`
  position: absolute;
  padding: 16px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export const ContactFormBoxPhone = styled.div`
  display: flex;
  justify-content: center;
`;
