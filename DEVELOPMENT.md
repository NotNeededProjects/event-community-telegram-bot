## Development

### Gelistirme icin Gerekli Araclar
  nodejs, npm, yarn, git gibi araclari indirin.

### Telegram Bot
  config.js icinde test bot olusturduk, bu asamayi yapmaniza gerek yok. Ama kendi botunuzu olusturucak iseniz alt kisimdaki adimlari gercekleyin.

Ilk olarak @BotFather botundan kendinize bot olusturun. Sirasiyla:

	/start

	/newbot
	
	${Sizin_Botunuzun_Ismi}

Sonrasinda @BotFather size botunuzun token degerini ve telegram linkini gonderecektir. Bu degerleri config.js dosyasinin icine yaziniz.

### Gelistirme
  Bot kodumuzu calistirin.

```bash
  $ git clone https://github.com/NotNeededProjects/event-community-telegram-bot
  $ cd event-community-telegram-bot
  $ yarn install
  $ node index.js
  Test Bot started, http://t.me/test_event_community_bot
```

Kodu calistirdiktan sonra konsolda yazan linke tiklayip telegram botu ile mesajlasmaya calisin.