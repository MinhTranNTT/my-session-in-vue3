const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(newValue) {
      if (newValue >= 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = newValue;
      }

      if (newValue <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (this.playerHealth < 0) {
        this.winner = "monster";
      }
    },

    monsterHealth(newValue) {
      if (newValue >= 100) {
        this.monsterHealth = 100;
      } else {
        this.monsterHealth = newValue;
      }

      if (newValue <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (this.playerHealth < 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    getMonsterBar() {
      if (this.monsterHealth < 0) return { width: "0%" };
      return { width: this.monsterHealth + "%" };
    },
    getPlayerBar() {
      if (this.playerHealth < 0) return { width: "0%" };
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "Attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
      this.addLogMessage("Monster", "Attack", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "Special-Attack", attackValue);
      this.attackPlayer();
    },
    healthPlayer() {
      this.currentRound++;
      const healthValue = getRandomValue(8, 20);

      // if (this.playerHealth + healthValue > 100) {
      //   return (this.playerHealth = 100);
      // }
      // return (this.playerHealth += healthValue);
      this.playerHealth += healthValue;
      this.addLogMessage("Player", "Heal", healthValue);
      this.attackPlayer();
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      logMessages: [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");

function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min));
}
