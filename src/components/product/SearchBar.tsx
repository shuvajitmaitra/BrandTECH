import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Search, Settings, SlidersHorizontal } from 'lucide-react-native';
import { useThemeColors } from '../../hooks/useThemeColors';

type SearchBarProps = {
  value: string;
  onChangeText: (value: string) => void;
};

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  const { colors } = useThemeColors();

  return (
    <View className="mb-3 rounded-3xl border border-border bg-card px-4 py-4">
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-xs font-semibold uppercase tracking-[2px] text-primary">
          Product Search
        </Text>
        <View className="rounded-full border border-border bg-accent h-8 w-8 justify-center items-center">
          <SlidersHorizontal size={14} color={colors.primary} />
        </View>
      </View>
      <View className="flex-row items-center px-3 gap-3 rounded-full border border-border bg-background">
        <Search size={18} color={colors.primary} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Search innovative products"
          className="text-foreground flex-1 h-12"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.mutedForeground}
          selectionColor={colors.primary}
        />
      </View>
    </View>
  );
};

export default SearchBar;
