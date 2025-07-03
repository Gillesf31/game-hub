import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { SiNintendo, SiSega } from 'react-icons/si';
import { Platform } from '../entities/Platform';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhone,
    web: BsGlobe,
    sega: SiSega,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) =>
        iconMap[platform.slug] ? (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            colorPalette="grey.500"
          />
        ) : null
      )}
    </HStack>
  );
};

export default PlatformIconList;
