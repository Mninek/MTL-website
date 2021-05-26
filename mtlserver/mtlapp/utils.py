import random

protoss_li = ['zealot','stalker','adept','sentry','immortal','colossus','disrupter','pheonix','voidray','oracle','tempest','high templar','dark templar','archon']
terran_li = ['marine','marauder','reaper','ghost','widowmine','hellion','tank','cyclone','thor','viking','liberator','raven','banshee','cattlebruiser','hellbat']
zerg_li = ['zergling','baneling','roach','ravager','muta','corrupter','hydra','lurker','infestor','swarmhost','viper','ultra','broodlord','queens']

def rollUnits():
    li = []
    roll = random.randint(1,14)
    roll -= 1
    li.append(protoss_li[roll])
    roll2 = random.randint(1,15)
    roll2 -= 1
    li.append(terran_li[roll2])
    roll3 = random.randint(1,14)
    roll3 -= 1
    li.append(zerg_li[roll3])
    return li