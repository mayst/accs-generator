import React from 'react';
import IDraftContact from '@/models/IDraftContact';

export const defaultDraft = { nickname: '', avatar: ''  };

export const DraftContext = React.createContext({
    draft: defaultDraft,
    changeDraft: (value: Partial<IDraftContact>) => {},
});

export default DraftContext;
