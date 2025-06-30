import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  BsGlobe,
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
  MdPhone,
  SiNintendo,
} from 'react-icons/all';
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
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='grey.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
