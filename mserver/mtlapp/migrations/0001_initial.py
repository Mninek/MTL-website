# Generated by Django 3.1.2 on 2021-05-25 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='randomRoll',
            fields=[
                ('rollId', models.AutoField(primary_key=True, serialize=False)),
                ('protossUnit', models.CharField(max_length=100)),
                ('zergUnit', models.CharField(max_length=100)),
                ('terranUnit', models.CharField(max_length=100)),
            ],
        ),
    ]