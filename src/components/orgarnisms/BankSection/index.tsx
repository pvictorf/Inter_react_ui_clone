import React, { useEffect } from "react";
import { useLocale } from "../../../hooks/useLocale";
import { Locale } from "../../bosons/Locale";
import { ButtonFilled } from "../../atoms/ButtonFilled";
import { ButtonOutline } from "../../atoms/ButtonOutline";
import { BoxArticle } from "../../molecules/BoxArticle";
import * as S from './styled';

export const BankSection = () => {
  const {t} = useLocale()

  return (
    <S.BankSection>

      <S.InterSuperAppContent>
        <BoxArticle
          title={t('inter_superapp_title')} 
          subtitle={t('inter_superapp_subtitle')} 
          buttonFilled={<ButtonFilled title="Quero ser Inter" />}
        />
        <S.ImageInterMobile /> 
      </S.InterSuperAppContent>


      <S.InterBankContent>
        <S.ImageInterMobile /> 
        <BoxArticle
          label="Inter Bank"
          title={t('inter_bank_title')} 
          subtitle={<Locale translation="inter_bank_subtitle" />} 
        />
      </S.InterBankContent>


      <S.InterInvestContent>
        <BoxArticle
          label="Inter Invest"
          title={t('inter_invest_title')} 
          subtitle={t('inter_invest_subtitle')} 
        />
        <S.ImageInterInvest /> 
      </S.InterInvestContent>


      <S.InterShopContent>
        <S.ImageInterShop />
        <BoxArticle
          label="Inter Shop"
          title={t('inter_shop_title')} 
          subtitle={t('inter_shop_subtitle')} 
          buttonFilled={<ButtonFilled title='Ganhar Cashback' />}
        />
      </S.InterShopContent>


      <S.InterEnterprisesContent>
        <BoxArticle
          label="Inter Enterprises"
          title={t('inter_enterprises_title')} 
          subtitle={t('inter_enterprises_subtitle')} 
          buttonFilled={<ButtonFilled title='Conhecer a Conta Digital PJ' />}
          buttonOutline={<ButtonOutline title='Conhecer a Conta Digital MEI' />}
        />
         <S.ImageInterEnterprises />
      </S.InterEnterprisesContent>


      <S.InterSecurityContent>
      <S.ImageInterSecurity />
        <BoxArticle
          label="Inter Secutiry"
          title={t('inter_security_title')} 
          subtitle={t('inter_security_subtitle')} 
          buttonFilled={<ButtonFilled title='Conhecer a Inter Seguros' />}
        />
      </S.InterSecurityContent>


      <S.InterFinanceContent>
        <BoxArticle
          label="Empréstimos e Financiamento"
          title={t('inter_finance_title')} 
          subtitle={t('inter_finance_subtitle')} 
          buttonFilled={<ButtonFilled title='Simular meu Empréstimo' />}
        />
        <S.ImageInterFinance />
      </S.InterFinanceContent>

    </S.BankSection>
  );
} 