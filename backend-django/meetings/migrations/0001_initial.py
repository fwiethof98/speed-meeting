# Generated by Django 3.1.2 on 2020-12-12 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('date', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Meeting',
            fields=[
                ('meetingID', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField(blank=True, null=True)),
                ('attendeePW', models.TextField(blank=True, null=True)),
                ('moderatorPW', models.TextField(blank=True, null=True)),
                ('isBreakout', models.BooleanField(blank=True, null=True)),
            ],
        ),
    ]