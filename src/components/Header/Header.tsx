import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SVG} from '../../assets/svg';
import {COMMON_COLORS, STYLES} from '../../assets/theme';

const Header = ({
  marginH = false,
  title = '',
}: {
  marginH?: boolean;
  title?: string;
}) => {
  const navigation = useNavigation<any>();
  const [isDrawerOpen, setIsDrawerOpen] = useState('closed');

  const currentDrawerStatus = useDrawerStatus();

  useEffect(() => {
    setIsDrawerOpen(currentDrawerStatus);
  }, [currentDrawerStatus]);

  return (
    <View style={[marginH && STYLES.mH(20)]}>
      <SafeAreaView />

      <View style={STYLES.rowCenter}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            if (isDrawerOpen === 'open') {
              navigation.closeDrawer();
              setIsDrawerOpen('closed');
            } else {
              navigation.openDrawer();
              setIsDrawerOpen('open');
            }
          }}>
          <SVG.Menu width={20} height={20} />
        </TouchableOpacity>
        {title && (
          <Text
            style={{
              alignSelf: 'center',
              left: 50,
              position: 'absolute',
              right: 50,
              textAlign: 'center',
              fontSize: 17,
              fontWeight: '500',
              color: COMMON_COLORS.blueBayoux,
            }}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Header;
