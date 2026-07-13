'use client';

import { useCallback } from 'react';
import useSWR from 'swr';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { TikTokDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/tiktok.dto';

export type TikTokCreatorInfo = {
  avatarUrl: string;
  username: string;
  nickname: string;
  privacyLevelOptions: NonNullable<TikTokDto['privacy_level']>[];
  commentDisabled: boolean;
  duetDisabled: boolean;
  stitchDisabled: boolean;
  maxVideoPostDurationSec: number;
};

export const useTikTokCreatorInfo = (integrationId?: string) => {
  const fetch = useFetch();
  const getCreatorInfo = useCallback(async () => {
    const response = await fetch(
      `/integrations/tiktok/${integrationId}/creator-info`
    );
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(
        body?.message || 'Unable to load TikTok creator information'
      );
    }
    return response.json();
  }, [fetch, integrationId]);

  return useSWR<TikTokCreatorInfo>(
    integrationId ? `tiktok-creator-info-${integrationId}` : null,
    getCreatorInfo
  );
};
