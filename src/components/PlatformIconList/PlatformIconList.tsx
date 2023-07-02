import {Platform} from "../../hooks/models/game.type";
import {HStack, Icon} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";

type PlatformIconListProps = {
    platforms: Platform[];
}

function PlatformIconList({platforms}: PlatformIconListProps) {
    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform: Platform) => (
                <Icon key={platform.slug} as={iconMap[platform.slug]} color='gray.500' />))
            }
        </HStack>
    );
}

export default PlatformIconList;
