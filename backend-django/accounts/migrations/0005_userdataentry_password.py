# Generated by Django 3.1.2 on 2021-01-10 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_userdataentry_semester'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdataentry',
            name='password',
            field=models.TextField(blank=True, null=True),
        ),
    ]