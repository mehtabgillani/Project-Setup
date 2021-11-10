import React from 'react';
import { useTranslation } from 'react-i18next';
import Panel from '../../../../shared/components/Panel';

const DefaultPanelDivider = () => {
  const { t } = useTranslation('common');

  return (
    <Panel xs={12} md={12} lg={6} divider title={t('ui_elements.panels.default_panel_divider')}>
      <p className="typography-message">
        Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered
        had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure
        education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly.
      </p>
    </Panel>
  );
};

export default DefaultPanelDivider;