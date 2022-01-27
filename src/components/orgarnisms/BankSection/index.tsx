import React from "react";
import { useLocale } from "../../../hooks/useLocale";
import { ButtonFilled } from "../../atoms/ButtonFilled";
import { BoxArticle } from "../../molecules/BoxArticle";
import * as S from './styled';

export const BankSection = () => {
  const {t} = useLocale()

  return (
    <S.BankSection>

      <S.InterSuperAppContent>
        <BoxArticle
          title={t('you_change_super_app')} 
          subtitle={t('who_has_account_inter')} 
          buttonFilled={<ButtonFilled title="Quero ser Inter" />}
        />
        <S.ImageInterMobile /> 
      </S.InterSuperAppContent>

      <S.InterBankContent>
        <S.ImageInterMobile /> 
        <BoxArticle
          title={t('different_and_nofees')} 
          subtitle={t('plan_invest_future')} 
        />
      </S.InterBankContent>

      <S.InterInvestContent>
        <BoxArticle
          title={t('your_money_choice')} 
          subtitle={t('practicality_and_security')} 
        />
        <S.ImageInterInvest /> 
      </S.InterInvestContent>

      <S.InterInvestContent>
        <S.ImageInterShop />
        <BoxArticle
          title={t('you_enter_earn_cashback')} 
          subtitle={t('you_looking_one_place')} 
        />
      </S.InterInvestContent>

      <S.InterEnterprisesContent>
        <BoxArticle
          title={t('you_enter_earn_cashback')} 
          subtitle={t('you_looking_one_place')} 
        />
        <S.ImageInterEnterprises />
      </S.InterEnterprisesContent>

    </S.BankSection>
  );
} 